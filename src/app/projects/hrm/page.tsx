import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ProjectDetail } from "@/components/ProjectDetail";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const title = "HRM System — Nhat Nguyen";
const description =
  "Spring Boot HR management API: scoped RBAC, refresh token rotation, state-machine payroll and integrity constraints in PostgreSQL.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects/hrm" },
  openGraph: {
    type: "article",
    url: "/projects/hrm",
    siteName: "Nhat Nguyen — Backend Developer",
    title,
    description,
    locale: "en_US",
    // Overriding openGraph drops the inherited root image, so point back to it.
    images: ["/opengraph-image"],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function HrmPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ProjectDetail slug="hrm" />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
