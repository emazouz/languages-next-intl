import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href='/contact'>{t("contact")}</Link>
    </div>
  );
}
