/* Original teaching summaries; source names are displayed without manual content. */
(()=>{
 'use strict';
 ATLAS_DOMAINS.splice(ATLAS_DOMAINS.findIndex(d=>d.id==='planning')+1,0,{id:'urban-mobility',title:'Urban mobility',description:'Travel demand, daily activities and mode-choice behavior',color:'#0E7490',icon:'⇄'});
 const moved=['four-step-model','trip-generation-model','trip-end-direction','trip-distribution-model','gravity-distribution','mode-choice-model','binary-mode-logit','model-impedance','trip-matrix-balancing','network-assignment','transport-analysis-zone','forecast-feedback','forecast-to-operations','assignment-objectives'];
 for(const entry of ATLAS_ENTRIES)if(moved.includes(entry.id))entry.domain='urban-mobility';
 for(const term of ATLAS_TERMS)if(term.related.some(id=>moved.includes(id)))term.domain='urban-mobility';
 const tours='TF Resource — Tour-based models and Travel Behavior';
 const activity='FHWA — Synthesis of Traveler Choice Research (2013)',utility='A Self-Instructing Course in Mode Choice Modeling — Utility-based Choice Theory',logit='A Self-Instructing Course in Mode Choice Modeling — The Multinomial Logit Model',choice='FHWA — Mathematical Models for Predicting Mode Choice';
 function add(id,title,value,description,notes,names,extra={}){ATLAS_ENTRIES.push({id,domain:'urban-mobility',title,value,description,notes,refs:names.map(name=>({name})),type:'Concept',tags:[title,description,...notes].join(' '),...extra});}
 add('activity-based-modeling','Activity-based travel modeling','Activities → tours → trips','Represent travel as part of a person’s daily activity schedule.',[
  'An activity-based model links where and when people undertake activities with the travel needed to reach them. It can retain individual and household characteristics rather than only zonal trip totals.',
  'A daily plan can include work, education, shopping and shared household activities. Choices of destination, timing and mode are linked; household members may share travel or vehicle access.',
  'Utility-based models estimate choices using preferences and constraints. Rule-based models describe scheduling decisions through behavioral rules. Implementations may combine approaches.',
  'Activity-based demand still needs network assignment or simulation to obtain traffic conditions. More detailed behavior does not by itself guarantee a better forecast.'
 ],[activity]);
 add('activity-tours','Tours and household constraints','Home → work → shop → home','Keep linked trips consistent within a day.',[
  'A tour connects activity stops and returns to its anchor, often home. Stops within the tour affect route, timing and feasible mode choices.',
  'Illustrative chain: home at 08:00 → work → grocery shop → home. Vehicle access and the end of the work activity constrain the later legs.',
  'A household escort trip or shared car creates interdependent schedules. Model feasible activity durations and travel times before accepting the plan.'
 ],[tours]);
 add('mode-utility-function','Utility function for mode choice','Uₘ = Vₘ + εₘ','Explain how time, cost and traveler attributes enter a choice model.',[
  'Uₘ is total utility, Vₘ is the systematic portion observed by the analyst, and εₘ represents unobserved influences.',
  'A simple specification is Vₘ = ASCₘ + βtime × timeₘ + βcost × costₘ. Coefficients convert the attributes into dimensionless utility; negative time and cost coefficients reduce preference as those attributes increase.',
  'ASC is an alternative-specific constant. One mode is used as the reference with its constant fixed to zero. Only utility differences determine the choice probabilities.',
  'More complete specifications can distinguish access, waiting and in-vehicle time or include traveler–mode interactions. Estimate coefficients from appropriate choice data; example coefficients are not transferable forecasts.'
 ],[utility],{formula:'Uₘ = Vₘ + εₘ; Vₘ = ASCₘ + βtime tₘ + βcost cₘ'});
 add('mode-utility-explorer','Mode-choice utility explorer','Time + cost → utility → probability','Compare car, transit and walking using an illustrative multinomial logit model.',[
  'Car is always available in this example. Transit and walking can be removed from the feasible choice set. The car constant is zero; transit and walking constants express relative preferences.',
  'Time is minutes per trip. Car and transit costs use the same currency units per trip; walking has zero monetary cost in this illustration. Time and cost coefficients use reciprocal input units.',
  'Pₘ = exp(Vₘ)/Σavailable exp(Vⱼ). Unavailable modes receive zero probability. Displayed probabilities describe a modeled choice tendency, not a prediction that every individual takes the same mode.',
  'All defaults are invented teaching inputs. The simple model omits heterogeneous preferences and treats unobserved utilities as independent identically distributed type-I extreme-value errors.',
  'In multinomial logit, Pᵢ/Pⱼ is unaffected by other alternatives (IIA). Closely related modes can violate this behavioral assumption; nested or mixed logit may be appropriate after estimation and testing.'
 ],[choice,logit],{type:'Interactive model',calc:'modeutility',formula:'Vₘ = ASCₘ + βtime tₘ + βcost cₘ; Pₘ = exp(Vₘ)/Σavailable exp(Vⱼ)'});
 add('mode-choice-availability','Mode availability and the IIA assumption','Feasible choices first','Define which modes a traveler can actually use.',[
  'A mode without a feasible service, access path or required vehicle should be excluded from that traveler’s choice set rather than assigned a small probability by a high cost.',
  'The multinomial logit probability ratio for two modes depends on their utility difference. Adding a very similar bus service may therefore produce unrealistic substitution patterns.',
  'Nested logit permits some correlation among grouped alternatives; mixed logit can represent variation in preferences. Choose and validate the structure using behavioral evidence.'
 ],[logit]);
 // Definitions use the existing travel-model schematic and route back to this domain.
 const diagram=ATLAS_TERMS.find(t=>t.related.includes('four-step-model'))?.diagram||'flow';
 for(const [id,title,definition,example,related,name]of[
  ['activity-based-modeling','Activity-based model','A travel-demand model that represents activities, schedules and the trips connecting them at the person or household level.','A worker combines commuting, shopping and returning home within one daily plan.','activity-based-modeling',activity],
  ['mode-utility','Mode-choice utility','A measure of a travel mode’s relative attractiveness, combining observed attributes and unobserved influences.','Increasing transit waiting time reduces its systematic utility when the time coefficient is negative.','mode-utility-function',utility]
 ])ATLAS_TERMS.push({id,title,aliases:[],definition,example,domain:'urban-mobility',refs:[{name}],diagram,related:[related]});
 ATLAS_TERMS.sort((a,b)=>a.title.localeCompare(b.title));
})();
