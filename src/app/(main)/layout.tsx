import { Footer } from "@/components/common/footer/Footer";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section className="bg-background text-primary content-center">
            <div>{children}</div>
            <Footer />
        </section>
    );
}