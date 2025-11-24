import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Database, Wrench } from "lucide-react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      category: "Frontend",
      icon: Code2,
      skills: ["ReactJs", "VueJs", "Bootstrap", "HTML/CSS"],
    },
    {
      category: "Backend",
      icon: Database,
      skills: ["Laravel", "Python", "MySQL", "REST APIs"],
    },
    {
      category: "Tools & Others",
      icon: Wrench,
      skills: [
        "Git",
        "VScode",
        "XAMPP",
        "Figma",
        "Docker",
        "Postman",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-slate-900">
            Skills & Expertise
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive set of technical skills built
            through years of hands-on experience and continuous
            learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{
                duration: 0.8,
                delay: categoryIndex * 0.2,
              }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 h-full border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-slate-900">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        duration: 0.5,
                        delay:
                          categoryIndex * 0.2 +
                          skillIndex * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-white rounded-lg text-slate-700 shadow-sm border border-slate-200 hover:border-blue-400 hover:text-blue-600 transition-all cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}