import { createClient } from "@supabase/supabase-js";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const supabase = createClient(
    "https://fwpdokjfwfokcqrgoanf.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3cGRva2pmd2Zva2NxcmdvYW5mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0MDgzMzksImV4cCI6MjA0Njk4NDMzOX0.DCEokLLKOpc1XTRGZlZa3xfWibIPYpyBURPubkS4ihA"
  );
  return { provide: { supabase } };
});
