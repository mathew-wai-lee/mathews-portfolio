<script>
	import NLPImg from '$lib/assets/images/hf-logo.svg'
	import PyTuxCartImg from '$lib/assets/images/PyTuxCart.gif'
	import dataWeaveImg from '$lib/assets/images/dataWeave.webp'


	const projectItems = [
		{
			image: NLPImg,
			cardTitle:
				'NLP - Analyzing and Improving ELECTRA Performance on Neutrally Labeled Premise/Hypothesis Pairs',
			bodyText:
				'Pre-trained models that over-rely on popular annotated datasets, like SNLI and MNLI, can learn dataset specific “Artifacts”. This hinders model generalization and leads to poor performance when deployed to production.',
			link: 'https://github.com/josephroque/e2e-nli-paper',
			badges: ['Python', 'PyTorch', 'DuckDB']
		},
		{
			image: PyTuxCartImg,
			cardTitle:
				'Deep Learning - Teaching AI to Play SuperTuxCart',
			bodyText:
				'CNN (Convolutional Neural Networks) are a type of feed-forward deep neural network that leverages convolution layers for visual processing. In this project, I leverage a low-level ‘auto-pilot’ controller to train an AI vision based driving system to complete a course of SuperTuxKart. (Code)',
			link: 'https://github.com/josephroque/e2e-nli-paper',
			badges: ['Python', 'PyTorch', 'Docker']
		},
		{
			image: dataWeaveImg,
			cardTitle:
				'Devops - Modern Data Analytics Stack In a Box (Pyspark, Apache Superset, Duckdb)',
			bodyText:
				'“Big Data” no longer requires a complicated cluster of machines and a PhD. We can use Docker to run a local analytics stack! I’ve used this stack to train teams at Amazon/WFM on the internals of PySpark and Docker.',
			link: 'https://github.com/josephroque/e2e-nli-paper',
			badges: ['Docker', 'PySpark', 'PyTorch']
		},
		{
			image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
			cardTitle:
				'Devops - Modern Data Analytics Stack In a Box (Pyspark, Apache Superset, Duckdb)',
			bodyText:
				'“Big Data” no longer requires a complicated cluster of machines and a PhD. We can use Docker to run a local analytics stack! I’ve used this stack to train teams at Amazon/WFM on the internals of PySpark and Docker.',
			link: 'https://github.com/josephroque/e2e-nli-paper',
			badges: ['Go', 'Javascript', 'HTML5']
		},
		{
			image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
			cardTitle:
				'Devops - Modern Data Analytics Stack In a Box (Pyspark, Apache Superset, Duckdb)',
			bodyText:
				'“Big Data” no longer requires a complicated cluster of machines and a PhD. We can use Docker to run a local analytics stack! I’ve used this stack to train teams at Amazon/WFM on the internals of PySpark and Docker.',
			link: 'https://github.com/josephroque/e2e-nli-paper',
			badges: ['Go', 'Javascript', 'HTML5']
		},
		{
			image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
			cardTitle:
				'Devops - Modern Data Analytics Stack In a Box (Pyspark, Apache Superset, Duckdb)',
			bodyText:
				'“Big Data” no longer requires a complicated cluster of machines and a PhD. We can use Docker to run a local analytics stack! I’ve used this stack to train teams at Amazon/WFM on the internals of PySpark and Docker.',
			link: 'https://github.com/josephroque/e2e-nli-paper',
			badges: ['Go', 'Javascript', 'HTML5']
		}
	];
</script>

<div class="grid w-5xl grid-cols-1 justify-items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
	{#each projectItems as project}
		<div class="card bg-base-100 w-80 shadow-sm">
			<figure class="bg-white">
				<img src={project.image} alt={project.cardTitle} class="h-50 object-cover"/>
			</figure>
			<div class="card-body">
				<h2 class="card-title font-mono text-sm font-bold">
					{project.cardTitle}
					<!-- <div class="badge badge-secondary">NEW</div> -->
				</h2>
				<p class="font-mono text-xs">
					{project.bodyText}
				</p>
				<div class="link link-hover link-info">
					<a href={project.link}>Read More</a>
				</div>
				<div class="card-actions justify-end">
					{#each project.badges as badge}
						<img src="https://img.shields.io/badge/{badge}-black?logo={badge}" alt="Static Badge" />
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>
