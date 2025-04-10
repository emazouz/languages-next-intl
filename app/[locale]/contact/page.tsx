import { ContactForm } from "@/components/ContactForm";
import Link from "next/link";
export default async function ContactPage() {
  return (
    <div>
      <h1>Contact</h1>
      <Link href='/'>Home</Link>
      <ContactForm />
    </div>
  );
}
