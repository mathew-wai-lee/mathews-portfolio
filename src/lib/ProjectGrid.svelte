<script>
	import Img1 from '$lib/assets/images/hf-logo.svg'
	import Img2 from '$lib/assets/images/PyTuxCart.gif'
	import Img3 from '$lib/assets/images/dataWeave.webp'
	import Img4 from '$lib/assets/images/2048px-Programming_code.jpg'
	import Img5 from '$lib/assets/images/Kalman1.png'
	import Img6 from '$lib/assets/images/SARIMA.png'

	const projectItems = [
		{
			image: Img1,
			cardTitle:
				'NLP/LLMs | Improving ELECTRA Performance',
			bodyText:
				'Pre-trained models that over-rely on popular annotated datasets, like SNLI and MNLI, can learn dataset specific “Artifacts”. This hinders model generalization and leads to poor performance when deployed to production.',
			link: 'https://github.com/josephroque/e2e-nli-paper',
			badges: ['Python', 'PyTorch', 'DuckDB']
		},
		{
			image: Img2,
			cardTitle:
				'Deep Learning | Teaching AI to Drive',
			bodyText:
				'CNN (Convolutional Neural Networks) are a type of feed-forward deep neural network that leverages convolution layers for visual processing. In this project, I leverage a low-level ‘auto-pilot’ controller to train an AI vision based driving system to complete a course of SuperTuxKart.',
			link: 'https://github.com/josephroque/e2e-nli-paper',
			badges: ['Python', 'PyTorch', 'Docker']
		},
		{
			image: Img3,
			cardTitle:
				'Devops | A Modern Data Analytics Stack In a Box',
			bodyText:
				'“Big Data” no longer requires a complicated cluster of machines and a PhD. We can use Docker to run a local analytics stack! I’ve used this stack to train teams at Amazon/WFM on the internals of PySpark and Docker.',
			link: 'https://github.com/josephroque/e2e-nli-paper',
			badges: ['Docker', 'PySpark', 'PyTorch']
		},
		{
			image: Img4,
			cardTitle:
				'App Development | Business Friendly UI/UX',
			bodyText:
				'Most business stakeholders err away from using CLIs (Command Line Interfaces) or from writing complicated SQL. Instead, I designed and built an application that accepts input, queries a MS SQL Server Database, and returns results for master data management teams to maintain tables in SAP.',
			link: 'https://github.com/josephroque/e2e-nli-paper',
			badges: ['Go', 'Javascript', 'HTML5']
		},
		{
			image: Img5,
			cardTitle:
				'Forecasting | Using SARIMA to Predict Dallas Weather',
			bodyText:
				'SARIMA (Seasonal Auto Regressive Integrated Moving Average) is a widely used model that brings components of different Time Series forecasting methods to create a more robust way to forecast. We can use SARIMA to predict the “one-year-in-advance” prediction of temperature for January 2018.',
			link: 'https://github.com/josephroque/e2e-nli-paper',
			badges: ['R']
		},
		{
			image: Img6,
			cardTitle:
				'Kalman Filters | Univariate Dynamic Linear Model Time Series',
			bodyText:
				'Kalman Filters have many applications in aerospace, navigation, econometrics, etc. and are often applied in time series analysis for signal processing. We are able to estimate a joint probability distribution over the variables by taking the uncertainty into account.',
			link: 'https://github.com/josephroque/e2e-nli-paper',
			badges: ['R']
		}
	];
</script>

<div class="grid w-5xl grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
	{#each projectItems as project}
		<div class="card bg-base-100 w-80 shadow-sm">
			<figure class="bg-white">
				<img src={project.image} alt={project.cardTitle} class="h-60"/>
			</figure>
			<div class="card-body">
				<h2 class="card-title font-mono text-sm font-bold italic text-center">
					{project.cardTitle}
					<!-- <div class="badge badge-secondary">NEW</div> -->
				</h2>
				<p class="font-mono text-xs my-3">
					{project.bodyText}
				</p>
				<div class="link link-hover link-info mb-3">
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
