import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Helmet} from 'react-helmet';
import triple_icon_desktop from '../../img/arbitrator/triple_icon.png';
import triple_icon_mobile from '../../img/arbitrator/triple_icon_horizontal.png';
import pdf_img from '../../img/download_pdf_icon.png';

import '../../styles/arbitrator.css';

//images
import marc_roger from '../../img/arbitrator/marc-roger.jpg';

const arbitratorCandidates = [
	{
		cand_name: 'Marc-Roger Gagné',
		cand_vote_name: 'arbmarkgagne',
		cand_description: 'CCIE, CCII, CIPP/G/C, MAPP',
		cand_statement: [
			'Marc-Roger Gagné is a prolific Data Governance Advocate who resides in Ottawa, Canada. Throughout the span of nearly two decades, Marc-Roger has been dedicated to providing top-notch policy advice for government and corporate clients alike. He is a member of the Board of Directors of the Privacy and Access Council of Canada since 2010 and a Member of the International Association of Privacy Professionals (817631). Additionally, he holds membership at the Compliance, Governance & Oversight Council, the Law Society of Upper Canada.',
			'Marc-Roger’s accreditations are many. In 2011 he was recognized as a Master Access and Privacy Professional (MAPP), the highest designation in the Privacy  community. He also holds accreditations as a CIPP, CIPP/G, CIPP/C, Certified Cyber Threat Analyst (CCTA), Certified Cyber Intelligence Investigator (CCII), Certified Human Trafficking Investigator (CHTI) and Certified Cyber Threat Forensic Investigator (CTFI). His key competencies lie in Litigation, Privacy, Breach Management and Training Programs, Policy Development, Information Management, Informational Technology, Data Analytics.',
			'Combining his vast knowledgebase along with his integrity, Marc-Roger is a well-recognized and respected professional who has integrated numerous innovative strategies into everything that he does in the privacy, data protection, and legal services fields.'
		],
		cand_image: marc_roger,
		cand_languages: [
			'English',
			'French'
		],
		cand_country: 'Canada'
	}
];

//email template for contact link
const arbitratorMail = {
	address: 'hello@telosfoundation.io',
	subject: 'Telos Arbitrator candidate',
	body: 'Dear Members of the Telos Network,%0D%0A%0D%0AI am a legal professional who is interested in joining the Telos Network as an Arbitrator. Please send me more information about the role requirements, selection process, contract terms and compensation.%0D%0A%0D%0AThank you,%0D%0A%0D%0A[Signature]'
};

//const ARBITRATION_DOCUMENT = 'http://resources.telosfoundation.io/Telos Network Arbitration Process.pdf';



const arbitratorDocuments = [
	{
		name: 'Telos Arbitration Process Document',
		description: 'This document outlines how the arbitration of disputes and interventions to change account or contract values will be administered on the Telos Network.',
		url: 'https://medium.com/@teloslogical/fyc-telos-network-arbitration-process-e4ed6f9e4ace',
		type: 'link'
	},
	{
		name: 'Telos Arbitrators Minimum Requirements',
		description: 'All arbitrators must meet minimum requirements to ensure that they are qualified to settle disputes on the Telos Network.',
		url: 'https://resources.telosfoundation.io/arbitrator_documents/Telos Arbitrator Minimum Requirements.pdf',
		type: 'pdf'
	},
	{
		name: 'regarbitrator human-language contract',
		description: 'All arbitrators must agree to fulfill the terms outlined in this smart contract.',
		url: 'https://resources.telosfoundation.io/arbitrator_documents/Telos regarb Human-language Contract.pdf',
		type: 'pdf'
	}
];

const Arbitrator = () => {
	return (
		<div className='arbitrators'>
			<Helmet>
				<title>Telos Arbitrator Program</title>
				<meta name="description" content="The Telos Network is the world’s first governed blockchain with arbitrators elected by its members. We are looking for legal professionals from around the world to help us build this system into the model for all future blockchain governance and arbitration." />
			</Helmet>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<ArbitratorIntro />
						<ArbitratorCandidates />
					</Col>
				</Row>
			</Grid>
		</div>
	);
};

const ArbitratorIntro = () => {
	const {address, subject, body} = arbitratorMail;
	return (
		<section id='arbitrator_intro'>
			<Row>
				<Col md={12}>
					<h1>Arbitrator Program</h1>
					<img src={triple_icon_mobile} alt='' className='triple_icon_mobile' />
					<Row>
						<Col sm={2}>
							<img src={triple_icon_desktop} alt='' className='triple_icon_desktop' />
						</Col>
						<Col sm={10}>
							<section>
								<div className='intro_row'>
									<p>The Telos Network is the world’s first governed blockchain with arbitrators elected by its members. We are looking for legal professionals from around the world to help us build this system into the model for all future blockchain governance and arbitration.</p>
								</div>
								<div className='intro_row'>
									<p>Arbitrators may be individuals, teams, or firms who nominate themselves by executing the regarbitrator contract. Arbitrators are selected by the votes of TLOS token-holders and are paid arbitration fees in TLOS. At launch, this page will hold the campaign statements of every arbitrator candidate to facilitate voting. At present, the site shows sample statements and statements from any who notify us of their intent to campaign.</p>
								</div>
							</section>
							<section className='intro_downloads'>
								{
									arbitratorDocuments.map((doc, i) => {
										return (
											<ArbitratorDocument
												key={i}
												name={doc.name}
												description={doc.description}
												url={doc.url} />
										);
									})
								}
							</section>
						</Col>
					</Row>
					

					<div className='arbitrator_intro_contact'>
						<h3>If you are interested in becoming an arbitrator on the Telos Network, please contact us.</h3>
						<a href={`mailto:${address}?subject=${subject}&body=${body}`} className='btn btn-lg btn-primary'>CONTACT US</a>
					</div>
				</Col>
			</Row>
		</section>
	);
};

const ArbitratorDocument = (props) => {
	return (
		<div className='arbitrator_document_container'>
			<div className='arbitrator_document'>
				<a href={props.url} target='_blank' rel='noopener noreferrer'>{props.name}</a>
				<p>{props.description}</p>
			</div>
			<a href={props.url} target='_blank' rel='noopener noreferrer'>
				<img src={pdf_img} alt='pdf download icon' className='arbitrator_download_icon' /> 
			</a>
		</div> 
	);
};

const ArbitratorCandidates = () => {
	return (
		<section id='arbitrator_candidates'>
			<Row>
				<Col md={12}>
					<h2>Candidates</h2>
					<hr />
					<div className='candidate_list'>
						{
							arbitratorCandidates.map((arb, i) => {
								return (
									<ArbitratorCandidate
										key={i}
										cand_name={arb.cand_name}
										cand_vote_name={arb.cand_vote_name}
										cand_description={arb.cand_description}
										cand_statement={arb.cand_statement}
										cand_image={arb.cand_image}
										cand_languages={arb.cand_languages}
										cand_country={arb.cand_country} />
								);
							})
						}
					</div>
				</Col>
			</Row>
		</section>
	);
};

const ArbitratorCandidate = (
		{
			cand_name,
			cand_vote_name,
			cand_description,
			cand_statement,
			cand_image,
			cand_languages,
			cand_country
		}
	) => {
	return (
		<div className='arbitrator_candidate'>
			<Row>
				<Col md={3} sm={4}>
					<div className='arbitrator_candidate_image_container'>
						<img src={cand_image} alt={cand_name} className='arbitrator_candidate_image' />
					</div>
				</Col>
				<Col md={9} sm={8}>
					<div className='arbitrator_candidate_content'>
						<h3>{cand_name}</h3>
						<h4>{cand_description}</h4>
						{cand_statement.map((par, i) => <p key={i}>{par}</p>)}
						<p>Languages: &nbsp;&nbsp;{cand_languages.join(', ')}</p>
						<p>Country: &nbsp;&nbsp;{cand_country}</p>
						<p>Vote for: <span className='candidate_vote_name'>{cand_vote_name}</span></p>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Arbitrator;