import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type SubmissionType = "contact" | "schedule" | "newsletter" | "careers";

export type StoredSubmission<T> = T & {
  id: string;
  type: SubmissionType;
  createdAt: string;
};

const fileMap: Record<SubmissionType, string> = {
  contact: "contact.json",
  schedule: "schedule.json",
  newsletter: "newsletter.json",
  careers: "careers.json",
};

const dataDir = path.join(process.cwd(), "data");

async function ensureDataDir() {
  await mkdir(dataDir, { recursive: true });
}

async function readSubmissions<T>(type: SubmissionType): Promise<StoredSubmission<T>[]> {
  await ensureDataDir();
  const filePath = path.join(dataDir, fileMap[type]);

  try {
    const data = await readFile(filePath, "utf8");
    return JSON.parse(data) as StoredSubmission<T>[];
  } catch {
    return [];
  }
}

async function writeSubmissions<T>(type: SubmissionType, items: StoredSubmission<T>[]) {
  await ensureDataDir();
  const filePath = path.join(dataDir, fileMap[type]);
  await writeFile(filePath, JSON.stringify(items, null, 2), "utf8");
}

export async function saveSubmission<T>(type: SubmissionType, payload: T) {
  const items = await readSubmissions<T>(type);
  const item: StoredSubmission<T> = {
    ...payload,
    id: crypto.randomUUID(),
    type,
    createdAt: new Date().toISOString(),
  };
  items.unshift(item);
  await writeSubmissions(type, items);
  return item;
}

export async function getAllSubmissions() {
  const [contact, schedule, newsletter, careers] = await Promise.all([
    readSubmissions<Record<string, unknown>>("contact"),
    readSubmissions<Record<string, unknown>>("schedule"),
    readSubmissions<Record<string, unknown>>("newsletter"),
    readSubmissions<Record<string, unknown>>("careers"),
  ]);

  return { contact, schedule, newsletter, careers };
}
