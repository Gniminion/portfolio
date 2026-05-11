import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function ProjectSection({ 
  id, 
  title, 
  content, 
  images, 
  forwardedRef 
}) {
  const getImagePath = (imageName) => {
    if (!imageName) return '';
    if (imageName.startsWith('http')) return imageName;
    return `/projects/${imageName}`;
  };

  return (
    <section id={id} ref={forwardedRef} className="mb-12">
      <h2 className="text-2xl mb-6 font-heading">{title}</h2>
      <div className="prose prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4 font-heading" {...props} />,
            h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-6 mb-3 font-heading" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-lg font-semibold mt-4 mb-2 font-heading" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc list-inside mb-2" {...props} />,
            ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-2" {...props} />,
            a: ({node, ...props}) => <a className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
            li: ({node, ...props}) => <li className="mb-1" {...props} />,
            p: ({node, ...props}) => <p className="mb-2" {...props} />,
          }}
        >
          {content || `${title} content coming soon...`}
        </ReactMarkdown>
      </div>
      {images?.map((image, index) => (
        <figure key={index} className="mt-8">
          <img 
            src={getImagePath(image.src)} 
            alt={image.caption}
            className="w-full"
            loading="lazy"
          />
          <figcaption className="mt-2 text-sm text-gray text-center">
            {image.caption}
          </figcaption>
        </figure>
      ))}
    </section>
  );
}

export default ProjectSection; 
