"use client";

import { navItems } from "@/data";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const gridVariants = {
    hidden: { opacity: 0.9, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const clientsVariants = {
    hidden: { opacity: 0.2, x: -100 },
    visible: { opacity: 1, x: 0 },
};

const experienceVariants = {
    hidden: { opacity: 0.2, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const approachVariants = {
    hidden: { opacity: 0.2, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const useInViewAnimation = (threshold = 0.1) => {
    const [isClient, setIsClient] = useState(false);
    const controls = useAnimation();
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        setIsClient(true);

        if (!isClient || typeof window === 'undefined') return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        controls.start("visible");
                    } else {
                        controls.start("hidden");
                    }
                });
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [controls, isClient]);

    return [ref, controls] as const;
};

const Home = () => {
    const [gridRef, gridControls] = useInViewAnimation(0.1);
    const [clientsRef, clientsControls] = useInViewAnimation(0.1);
    const [experienceRef, experienceControls] = useInViewAnimation(0.1);
    const [approachRef, approachControls] = useInViewAnimation(0.1);
    const [footerRef, footerControls] = useInViewAnimation(0.1);

    return (
        <main className="relative overflow-clip">
            <FloatingNav navItems={navItems} />
            <Hero />

            <motion.section
                ref={gridRef as unknown as React.LegacyRef<HTMLElement>}
                initial="hidden"
                animate={gridControls}
                variants={gridVariants}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative bg-black-200 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip"
            >
                <Grid />
            </motion.section>

            <section className="relative bg-white-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
                <RecentProjects />
            </section>

            <motion.section
                ref={clientsRef as unknown as React.LegacyRef<HTMLElement>}
                initial="hidden"
                animate={clientsControls}
                variants={clientsVariants}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative bg-black-200 justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip"
            >
                <Clients />
            </motion.section>

            <motion.section
                ref={experienceRef as unknown as React.LegacyRef<HTMLElement>}
                initial="hidden"
                animate={experienceControls}
                variants={experienceVariants}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative bg-white-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip"
            >
                <div className="max-w-7xl w-full">
                    <Experience />
                </div>
            </motion.section>

            <motion.section
                ref={approachRef as unknown as React.LegacyRef<HTMLElement>}
                initial="hidden"
                animate={approachControls}
                variants={approachVariants}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative bg-black-200 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip"
            >
                <div className="max-w-7xl w-full">
                    <Approach />
                </div>
            </motion.section>

            <motion.section
                ref={footerRef as unknown as React.LegacyRef<HTMLElement>}
                initial="hidden"
                animate={footerControls}
                variants={footerVariants}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-10 py-8 overflow-clip"
            >
                <div className="max-w-7xl w-full">
                    <Footer />
                </div>
            </motion.section>
        </main>
    );
};

export default Home;