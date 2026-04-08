import { randomUUID } from 'crypto';
import { getDb } from '@/lib/mongodb/client';

interface ProgressUpdate {
  userId: string;
  subStrandId: string;
  percentage: number;
}

export async function getProfileByUserId(userId: string) {
  const db = await getDb();
  return db.collection('profiles').findOne({ id: userId });
}

export async function getStrandsBySubjectCode(subjectCode: string) {
  const db = await getDb();
  return db.collection('strands').find({ subject_id: subjectCode }).sort({ order: 1 }).toArray();
}

export async function getStrandById(strandId: string) {
  const db = await getDb();
  return db.collection('strands').findOne({ id: strandId });
}

export async function getSubStrandsByStrandId(strandId: string) {
  const db = await getDb();
  return db.collection('sub_strands').find({ strand_id: strandId }).sort({ order: 1 }).toArray();
}

export async function getSubStrandById(subStrandId: string) {
  const db = await getDb();
  return db.collection('sub_strands').findOne({ id: subStrandId });
}

export async function getLessonsBySubStrandId(subStrandId: string) {
  const db = await getDb();
  return db.collection('lessons').find({ sub_strand_id: subStrandId }).sort({ order: 1 }).toArray();
}

export async function getLessonById(lessonId: string) {
  const db = await getDb();
  return db.collection('lessons').findOne({ id: lessonId });
}

export async function getAssessmentBySubStrandId(subStrandId: string) {
  const db = await getDb();
  return db.collection('assessments').findOne({ sub_strand_id: subStrandId });
}

export async function getProgress(userId: string, subStrandId: string) {
  const db = await getDb();
  return db.collection('student_progress').findOne({ user_id: userId, sub_strand_id: subStrandId });
}

export async function upsertProgress({ userId, subStrandId, percentage }: ProgressUpdate) {
  const db = await getDb();

  await db.collection('student_progress').updateOne(
    { user_id: userId, sub_strand_id: subStrandId },
    {
      $set: {
        completed: true,
        completion_date: new Date().toISOString(),
        formative_assessment_score: percentage,
        updated_at: new Date().toISOString(),
      },
      $setOnInsert: {
        id: randomUUID(),
        created_at: new Date().toISOString(),
      },
    },
    { upsert: true }
  );
}
