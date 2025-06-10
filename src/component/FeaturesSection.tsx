'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const features = [
    {
        id: '01',
        title: 'Manage your data efficiently',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.',
        icon: 'https://cdn.jsdelivr.net/gh/feathericons/feather/icons/database.svg',
    },
    {
        id: '02',
        title: 'Built with neat utility features',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.',
        icon: 'https://cdn.jsdelivr.net/gh/feathericons/feather/icons/settings.svg',
    },
    {
        id: '03',
        title: 'Futuristic interactive designs',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.',
        icon: 'https://cdn.jsdelivr.net/gh/feathericons/feather/icons/layers.svg',
    },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Network Infrastructure Design
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="group border border-gray-200 p-8 rounded-xl hover:shadow-xl transition flex flex-col items-start w-full max-w-xs"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-6 w-full">
                <span className="text-2xl font-bold text-gray-300">{feature.id}</span>
                <img src={feature.icon} alt={feature.title} className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-500 mb-6">{feature.description}</p>€
              <a
                href="#"
                className="inline-flex items-center text-blue-600 font-medium hover:underline"
              >
                View More <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
