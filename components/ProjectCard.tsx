
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group w-full flex flex-col">
      {/* Image Container */}
      <div className="relative w-full aspect-[3/2] overflow-hidden bg-gray-50 cursor-pointer">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        
        {/* Hover Overlay: Black Gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white border-t border-white/20 pt-6">
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/50 mb-1 font-mono-tech">Time</p>
                <p className="text-[11px] font-light tracking-widest">{project.year}</p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/50 mb-1 font-mono-tech">Project</p>
                <p className="text-[11px] font-light tracking-widest">{project.category}</p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/50 mb-1 font-mono-tech">Introduction</p>
                <p className="text-[11px] font-light leading-relaxed text-white/80">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Label Below Image */}
      <div className="mt-4 flex flex-col">
        <h2 className="text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase text-black">
          {project.title}
        </h2>
        <div className="mt-2 h-[1px] w-full bg-gray-100 overflow-hidden">
          <div className="h-full w-0 group-hover:w-full bg-black transition-all duration-700 ease-in-out"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
