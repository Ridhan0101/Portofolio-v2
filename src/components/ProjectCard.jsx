export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{project.title}</h2>
        <p className="text-gray-600 text-sm">{project.description}</p>
        <div className="text-sm text-blue-600 mt-2 flex gap-4">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <p className="text-xs text-gray-500 mt-2">Tech: {project.techStack.join(', ')}</p>
      </div>
    </div>
  )
}
