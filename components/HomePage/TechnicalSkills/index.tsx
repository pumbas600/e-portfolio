import TechnologyGroup from './TechnologyGroup';
import Title from '../../Title';

export default function TechnicalSkills() {
	return (
		<section className="mb-8">
			<Title name="Technical Skills" />
			<div className="md:ml-8 ml-5 flex flex-col gap-y-3 mt-2">
				<TechnologyGroup
					title="Frontend"
					technologies={['nextjs', 'react', 'jquery', 'typescript', 'tailwindcss', 'thymeleaf', 'javascript']}
				/>
				<TechnologyGroup
					title="Backend"
					technologies={['express', 'typescript', 'nodejs', 'springboot', 'java']}
				/>
				<TechnologyGroup title="Databases" technologies={['sqlite', 'mongodb', 'derby', 'firebase']} />
				<TechnologyGroup title="Other*" technologies={['unity', 'c', 'python', 'c#', 'git']} />
				<em className="md:text-base text-sm">*Non-web development related.</em>
			</div>
		</section>
	);
}