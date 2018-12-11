> #### All details related to a patent including its id, filing date, publication date, publication number etc..
>> 
		SELECT *
		FROM core.pats
		WHERE patnum = 'US7290164B1';
#### Patent and its related claims.
>
>> SELECT *  
>> FROM core.pat_claim_relationships  
>> WHERE pat_claims_id = 167328526;  
> Patent and its related litigations details. 
```
		SELECT *
		FROM core.lits_pats_map
		WHERE patnum = '7290164';
```
> Details of those who have filed a ptab case.

```
		SELECT * 
		FROM ptab.ptab_cases
		WHERE stripped_patnum='7290164';
```
> Backward Citations :- Details of patents which are reffered by a particular patent.
```
		SELECT ref_patnum
		FROM core.pat_references
		WHERE pat_id = 3029673
		ORDER BY 1;
```

> Forward Citations:-Have details of all patents that are referring a particular patent.
```
		SELECT pat_id
		FROM core.pat_references
		WHERE ref_pat_id = 3029673
```
> core.pats_aliases_map :- Have the details including the id of particular relationship type.  
> core.aliases : -Have the name of the relationship related to a  particlular patent.
```
		SELECT pats_aliases_relationship_type_id,al.name
		FROM core.pats_aliases_map m
		INNER JOIN core.aliases al
		ON al.id = m.alias_id
		WHERE pat_id = 3029673;
```
> id and name of different relation ship types.
```
		SELECT *
		FROM pats_aliases_relationship_types;
```
> Description related to particular patent.
```
		SELECT *
		FROM core.pat_descriptions limit 1;
```
> A litigation and its associated docket details including the case key.
```
SELECT * 
FROM core.lits 
WHERE docket_number = '3:18-cv-00264';
```
> All the dockets which is associated with a particular litigation
```
SELECT * 
FROM core.docket_entries 
WHERE lit_id = 75524 
ORDER BY date_entered 
DESC limit 10;
```
> All party types(defendants) associated with a single litigation.
```
SELECT * 
FROM core.lit_party_types 
ORDER BY 1;
```
> Different types of parties(defendants) that can be involved in a litigation, including its id, name etc.
```
SELECT *
FROM core.lit_parties 
WHERE lit_id = 75524;
```
> Details of the accused products associated with a particular litigation
```
SELECT * 
FROM core.lit_accused_product 
WHERE lit_id = 75524;
```
> Show the number of patents involved in a particular litigation.
```
SELECT * 
FROM core.lits_pats_map 
WHERE lit_id = 75524;
```
> It shows the different parties its alias name,entity name, and its ultimate parent.
```
SELECT lp.id,lp.alias_id,lp.lit_party_type_id,al.alias_name,al.ent_id,al.ent_name,al.ultimate_parent_id,al.ultimate_parent_name 
FROM core.lit_parties lp 
INNER JOIN core.alias_ent_details al 
ON al.alias_id = lp.alias_id  
WHERE lit_id = 75524;
```
> The lawfirm, lawyers details associated with a particular plaintiff or a case.
```
SELECT lawfirm_alias_id,lawyer_alias_id,lawyer_alias_contact_id,lawfirm_alias_contact_id 
FROM core.lit_parties_representations 
WHERE lit_parties_id = 745611;
```
> Contact details of entities
```
SELECT * 
FROM core.alias_contacts 
WHERE id= 168307899;
```
> Shows different types of litigations and its details.
```
q
```
> Different market sector types, including its id and name.
```
SELECT * 
FROM core.market_sector_types 
WHERE id = 2;
```
> Reasons or causes for filing a litigation, including its id, name etc...
```
SELECT * 
FROM core.lit_curated_cause_types 
WHERE id = 8;
```
