> All details related to a patent including its id, filing date, publication date, publication number etc..
```
SELECT *
FROM core.pats
WHERE patnum = 'US7290164B1';
```
> Patent and its related claims.
```
SELECT *
FROM core.pat_claim_relationships
WHERE pat_claims_id = 167328526;
```
> Patent and its related litigations details. 
```
SELECT *
FROM core.lits_pats_map
WHERE patnum = '7290164';
```


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

