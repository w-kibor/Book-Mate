export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      grades: {
        Row: {
          id: string;
          name: string;
          level: number; // 7, 8, or 9
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          level: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          level?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      subjects: {
        Row: {
          id: string;
          name: string;
          code: string; // e.g., 'MATH', 'INT_SCI'
          description: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          code: string;
          description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          code?: string;
          description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      strands: {
        Row: {
          id: string;
          subject_id: string;
          name: string;
          description: string | null;
          order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          subject_id: string;
          name: string;
          description?: string | null;
          order: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          subject_id?: string;
          name?: string;
          description?: string | null;
          order?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      sub_strands: {
        Row: {
          id: string;
          strand_id: string;
          name: string;
          description: string | null;
          order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          strand_id: string;
          name: string;
          description?: string | null;
          order: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          strand_id?: string;
          name?: string;
          description?: string | null;
          order?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      lessons: {
        Row: {
          id: string;
          sub_strand_id: string;
          title: string;
          content: string; // Markdown or HTML
          order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          sub_strand_id: string;
          title: string;
          content: string;
          order: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          sub_strand_id?: string;
          title?: string;
          content?: string;
          order?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      student_progress: {
        Row: {
          id: string;
          user_id: string;
          sub_strand_id: string;
          completed: boolean;
          completion_date: string | null;
          formative_assessment_score: number | null; // 0-100
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          sub_strand_id: string;
          completed?: boolean;
          completion_date?: string | null;
          formative_assessment_score?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          sub_strand_id?: string;
          completed?: boolean;
          completion_date?: string | null;
          formative_assessment_score?: number | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      assessments: {
        Row: {
          id: string;
          sub_strand_id: string;
          title: string;
          type: 'multiple_choice' | 'practical_activity';
          questions: Json; // Array of question objects
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          sub_strand_id: string;
          title: string;
          type: 'multiple_choice' | 'practical_activity';
          questions: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          sub_strand_id?: string;
          title?: string;
          type?: 'multiple_choice' | 'practical_activity';
          questions?: Json;
          created_at?: string;
          updated_at?: string;
        };
      };
      profiles: {
        Row: {
          id: string;
          grade_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          grade_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          grade_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}

