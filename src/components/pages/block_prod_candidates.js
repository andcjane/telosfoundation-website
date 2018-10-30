import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import goodblock from '../../img/partner_logos/logo_goodblock.png';
import caleos from '../../img/partner_logos/logo_caleos.png';
import zephyr from '../../img/partner_logos/logo_zephyr.png';
import blindbloc from '../../img/partner_logos/logo_blindbloc.png';
import telos_vancouver from '../../img/partner_logos/logo_telos_vancouver.png';
import eosbarcelona from '../../img/partner_logos/logo_eosbarcelona.png';
import eosgreen from '../../img/partner_logos/logo_eosgreen.png';
import telos_miami from '../../img/partner_logos/logo_telos_miami.png';
import dutcheos from '../../img/partner_logos/logo_ketendutch.png';
import hellenicos from '../../img/partner_logos/logo_hellenicos.png';
import eos_sweden from '../../img/partner_logos/logo_eossweden.png';
import kainos from '../../img/partner_logos/logo_kainos.png';

// import eos_detroit from '../../img/partner_logos/logo_eosdetroit_small.png';
// import eos_metal from '../../img/partner_logos/logo_eosmetal.png';
// import eosukio from '../../img/partner_logos/logo_eosukio2.png';
// import eosvan from '../../img/partner_logos/logo_eosvan.png';
// import infinitybloc from '../../img/partner_logos/logo_infinitybloc.png';
// import teloslabs from '../../img/partner_logos/logo_teloslabs.png';
// import eosworld from '../../img/partner_logos/logo_eosworld.png';
// import fuzzy from '../../img/partner_logos/logo_fuzzy.png';
// import eos_in_space from '../../img/partner_logos/logo_eosspace.png';
// import discover_telos from '../../img/partner_logos/logo_discovertelos.png';
// import zmeta from '../../img/partner_logos/logo_zmeta.png';
// import csx from '../../img/partner_logos/logo_csx.png';
// import telos_russia from '../../img/partner_logos/logo_telosrussia.png';
// import amplified from '../../img/partner_logos/logo_amplified.png';
// import venezuela from '../../img/partner_logos/logo_telos_venezuela.png';
// import madrid from '../../img/partner_logos/logo_telos_madrid.png';
// import telos_ny from '../../img/partner_logos/logo_telos_ny.png';
// import telos_dac from '../../img/partner_logos/logo_telos_dac.png';
// import telos_canton from '../../img/partner_logos/logo_telos_canton.png';
// import eos_impera from '../../img/partner_logos/logo_eosimpera.png';

import '../../styles/block_prod_candidates.css';

const BlockProducerCandidates = () => {
	return (
		<div className='block_prod_candidates'>
			<Intro />
			<Candidates />
		</div>
	);
};

const Intro = () => {
	return (
		<section id='block_prod_intro'>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<h1>Block Producer Candidates</h1>
						<h2>This is a directory of candidates who submitted their names for consideration as block producers on Telos and are listed in the order of when they joined the Telos testnet. This is not necessarily a complete list of block producer candidates, and being on this list is not an endorsement.</h2> 
						<h2>Remember that Telos uses an inverse-weighted voting system - the more block candidates that you vote for, the more your votes count. Select up to 30 block producers to ensure that your votes hold maximum value.</h2>
						<h2>Download Sqrl, the free Telos wallet, to vote for block producer candidates:</h2> 
						<h2><Link to='/downloads'>https://telosfoundation.io/downloads</Link></h2>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const Candidates = () => {

	const bpCandidates = [
		{
			name: 'GoodBlock',
			description: 'GoodBlock™, a leader in the creation of Telos, will support innovative DApps and lightning-fast transactions to help build the world’s most powerful blockchain network.',
			url: 'https://goodblock.io',
			logo: goodblock,
			vote_name: 'goodblocktls'
		},
		{
			name: 'DutchEOS',
			description: 'We are a self funded EOSIO Block Producer based in the Netherlands striving for maximum Reliability and Independence. DutchEOS has been a proud supporter of Telos since the start.',
			url: 'https://dutcheos.io',
			logo: dutcheos,
			vote_name: 'votedutcheos'
		},
		{
			name: 'EOS Barcelona',
			description: 'EOS Barcelona have been working with the community since December 2017. We have bare metal servers on EOS main net, EOS testnet and Telos Testnet.',
			url: 'http://eos.barcelona',
			logo: eosbarcelona,
			vote_name: 'eosbarcelona'
		},
		{
			name: 'Telos Vancouver',
			description: 'Telos Vancouver, an independently owned Block Producer, is building solutions to real world problems on Telos through development, education, and support of the eos.io community.',
			url: 'https://www.telosvancouver.io',
			logo: telos_vancouver,
			vote_name: 'tlsvancouver'
		},
		{
			name: 'EOSGreen',
			description: 'TelosGreen goal is to promote sustainability and enterprise adoption of Telos Blockchain Network by engaging, empowering & educating the community.',
			url: 'http://eosgreen.io',
			logo: eosgreen,
			vote_name: 'telosgreenbp'
		},
		{
			name: 'BlindBlocArt',
			description: 'We will be using the funds from Telos to open art studios to teach art for free to kids and people with disabilities around the world, starting small and hopefully growing to many countries.',
			url: 'https://www.blindblocart.io',
			logo: blindbloc
		},
		{
			name: 'CalEOS',
			description: 'Caleos is a self-funded, bare metal Block Producer & dApp development team that has made substantial contributions to network mechanics & development.',
			url: 'https://caleos.io',
			logo: caleos
		},
		{
			name: 'Telos Miami',
			description: 'At Telos Miami, we’re passionate about Blockchain, Entrepreneurship, and Community. We are committed to giving back and creating DApps to transform industries.',
			url: 'https://telos.miami',
			logo: telos_miami,
			vote_name: 'TelosMiamiBP'
		},
		{
			name: 'SwedenCorNet (TELOS/EOS Sweden)',
			description: 'SwedenCorNet places emphasis on the fundamentals of security, privacy, risk management, and compliance. We strive for decentralization and serving the masses (including YOU) is our top priority.',
			url: 'https://eossweden.eu',
			logo: eos_sweden,
			vote_name: 'swedencornet'
		},
		{
			name: 'Octagon Labs',
			description: 'Octagon Labs are building modern trusted knowledge networks. The team behind this organisation brings enterprise class experience to blockchain adoption.',
			url: 'https://octagonlabs.org',
			logo: hellenicos,
			vote_name: 'octagontelos'
		},
		{
			name: 'Telos-21Zephyr',
			description: 'Telos-21Zephyr is passionate and committed to helping build the community around Telos by offering support to Telos users, and helping grow participation within the Telos community.',
			url: 'https://telos-21zephyr.com',
			logo: zephyr,
			vote_name: '21zephyr1111'
		},
		{
			name: 'KainosBP',
			description: 'Kainos Block Producers are a self-funded bare metal/cloud hybrid BP candidate headquartered in Central Texas. 10% of Kainos BP rewards will go to unboundnow.org, a non-profit working in local communities to fight human trafficking.',
			url: 'https://kainostech.com',
			logo: kainos,
			vote_name: 'kainosblkpro'
		}
	];


	return (
		<section id='bp_candidates'>
			<header>
				<h2>Candidates</h2>
			</header>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						{bpCandidates.map((cand, i) => {
							return (
								<Candidate
									key={i}
									name={cand.name}
									description={cand.description}
									url={cand.url}
									logo={cand.logo}
									vote_name={cand.vote_name} />
							);
						})}
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const Candidate = (props) => {
	const {name, description, url, logo, vote_name} = props;

	return (
		<div className='bp_candidate'>
			<Row>
				<Col sm={3}>
					<div className='bp_candidate_logo_container'>
						{logo ?
							url ?
								<a href={url} target='_blank' rel='noopener noreferrer'>
									<img src={logo} alt={`${name} logo`} className='bp_candidate_logo' />
								</a>
									:
								<img src={logo} alt={`${name} logo`} className='bp_candidate_logo' />
								: ''
						}
					</div>
				</Col>
				<Col sm={9}>
					<div className='bp_candidate_info'>
						<h4>{name}</h4>
						{description ? <p>{description}</p> : ''}
						{
							url ? 
								<p><a href={url} target='_blank' rel='noopener noreferrer'>{url}</a></p> :
								''
						}
						{
							vote_name ?
								<p className='bp_candidate_vote'>Vote: <span className='bp_candidate_vote_name'>{vote_name}</span></p> :
								<p className='bp_candidate_vote'>Vote: </p>
						}
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default BlockProducerCandidates;