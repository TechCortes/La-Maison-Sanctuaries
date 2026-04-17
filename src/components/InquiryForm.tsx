import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please share your name")
    .max(100, "Name must be under 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email")
    .max(255),
  interest: z.enum(["Membership", "Investor", "Press", "Other"]),
  message: z
    .string()
    .trim()
    .min(10, "A few words please")
    .max(1000, "Message must be under 1000 characters"),
});

type FormValues = z.infer<typeof schema>;

const recipients = "Holly-Mae@postproj.com";

export function InquiryForm() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { interest: "Membership" } as Partial<FormValues>,
  });

  const onSubmit = (data: FormValues) => {
    setSubmitting(true);
    const subject = encodeURIComponent(
      `La Maison — ${data.interest} inquiry from ${data.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nInterest: ${data.interest}\n\n${data.message}`,
    );
    if (typeof window !== "undefined") {
      window.location.href = `mailto:${recipients}?subject=${subject}&body=${body}`;
    }
    toast.success("Your note is on its way", {
      description: "We will reply by personal correspondence.",
    });
    setTimeout(() => {
      reset({ interest: "Membership" } as Partial<FormValues>);
      setSubmitting(false);
    }, 600);
  };

  const interests: Array<FormValues["interest"]> = [
    "Membership",
    "Investor",
    "Press",
    "Other",
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
      <Field label="Name" error={errors.name?.message}>
        <input
          {...register("name")}
          autoComplete="name"
          className="w-full border-0 border-b border-ink/30 bg-transparent py-3 text-base text-ink placeholder:text-ink/40 focus:border-wine focus:outline-none focus:ring-0"
          placeholder="Your full name"
        />
      </Field>

      <Field label="Email" error={errors.email?.message}>
        <input
          type="email"
          {...register("email")}
          autoComplete="email"
          className="w-full border-0 border-b border-ink/30 bg-transparent py-3 text-base text-ink placeholder:text-ink/40 focus:border-wine focus:outline-none focus:ring-0"
          placeholder="you@example.com"
        />
      </Field>

      <Field label="Interest" error={errors.interest?.message}>
        <div className="flex flex-wrap gap-2 pt-2">
          {interests.map((opt) => (
            <label
              key={opt}
              className="cursor-pointer border border-ink/20 px-4 py-2 text-xs uppercase tracking-[0.22em] text-ink/70 transition-all has-[:checked]:border-wine has-[:checked]:bg-wine has-[:checked]:text-bone"
            >
              <input
                type="radio"
                value={opt}
                {...register("interest")}
                className="sr-only"
              />
              {opt}
            </label>
          ))}
        </div>
      </Field>

      <Field label="Message" error={errors.message?.message}>
        <textarea
          rows={5}
          {...register("message")}
          maxLength={1000}
          className="w-full resize-none border-0 border-b border-ink/30 bg-transparent py-3 text-base text-ink placeholder:text-ink/40 focus:border-wine focus:outline-none focus:ring-0"
          placeholder="Tell us about your interest in La Maison..."
        />
      </Field>

      <button
        type="submit"
        disabled={submitting}
        className="group relative inline-flex items-center gap-3 border border-wine bg-wine px-8 py-4 text-xs font-medium uppercase tracking-[0.28em] text-bone transition-all hover:bg-wine-deep disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Request Introduction"}
        <span className="inline-block h-px w-6 bg-bone transition-all duration-500 group-hover:w-10" />
      </button>
    </form>
  );
}

function Field({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div>
      <label className="text-[0.7rem] uppercase tracking-[0.28em] text-wine">
        {label}
      </label>
      <div className="mt-1">{children}</div>
      {error && (
        <p className="mt-2 text-xs italic text-destructive">{error}</p>
      )}
    </div>
  );
}
