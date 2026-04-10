"use client";

import Image from "next/image";
import { UploadCloud } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

interface ImageUploadFieldProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
}

export function ImageUploadField({ value, onChange, label }: ImageUploadFieldProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFile = async (file?: File) => {
    if (!file) return;
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar a imagem.");
      }

      const data = (await response.json()) as { url: string };
      onChange(data.url);
      toast.success("Imagem enviada com sucesso.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro no upload.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-3">
      <span className="text-sm font-medium text-zinc-200">{label}</span>
      <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/5">
        <div className="relative h-48 w-full">
          <Image src={value} alt={label} fill className="object-cover" />
        </div>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(event) => handleFile(event.target.files?.[0])}
      />
      <Button
        type="button"
        variant="secondary"
        onClick={() => inputRef.current?.click()}
        disabled={loading}
      >
        <UploadCloud className="h-4 w-4" />
        {loading ? "Enviando..." : "Trocar imagem"}
      </Button>
    </div>
  );
}
