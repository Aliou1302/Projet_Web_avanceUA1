"use client";
import React from "react";
import styles from "./contact.module.css";
import { useActionState, useEffect } from "react";
import { handleContactForm } from "./actions";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("Contact");
  const router = useRouter();
  const [state, formAction] = useActionState(handleContactForm, null);

  // Redirection après succès
  useEffect(() => {
    if (state?.success) {
      router.push("/merci");
    }
  }, [state?.success, router]);

  return (
    <div>
      <form action={formAction} className={styles.container} noValidate>
        <h1 className={styles.title}>{t("title")}</h1>
        <input type="text" name="nomprenom" placeholder={t("name")} />
        {state?.errors?.nomprenom && (
          <span className="text-red-500 text-sm">{state.errors.nomprenom}</span>
        )}
        <textarea
          type="text"
          name="message"
          row={3}
          placeholder={t("message")}
        />
        {state?.errors?.message && (
          <span className="text-red-500 text-sm">{state.errors.message}</span>
        )}
        <input type="text" name="email" placeholder="Email" />
        {state?.errors?.email && (
          <span className="text-red-500 text-sm">{state.errors.email}</span>
        )}
        <button type="submit">{t("send")}</button>
        {state?.success && (
          <div className="text-green-500 text-sm">
            Votre message a été envoyé avec succès !
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
