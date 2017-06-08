/*
 * Copyright 2015-2016 OpenCB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Created by imedina on 05/06/17.
 */

var tools = {
    browser: {
        cohorts: {
            // "1kG_phase3": [{id: "ALL", name: "All"}, {id: "MXL", name: "Mexican"}],
            // "EXAC": [{id: "ALL", name: "All"}]
        },
        missing: true,
        filters: [
            {
                name: "Example BRCA2",
                query: {
                    gene: "BRCA2",
                    conservation: "phylop<0.001"
                }
            },
            {
                name: "Example OR11",
                query: {
                    gene: "OR11H1",
                    conservation: "phylop<=0.001"
                }
            }
        ]
    },
    prioritization: {
        segregation: ["Autosomal Dominant", "Autosomal Recessive", "Compound Heterocygotous", "Recessive X-linked"],
        filters: [
            {
                name: "Example BRCA2",
                query: {
                    gene: "BRCA2",
                    conservation: "phylop<0.001"
                }
            },
            {
                name: "Example OR11",
                query: {
                    gene: "OR11H1",
                    conservation: "phylop<=0.001"
                }
            }
        ]
    },
    gene: {
        protein: {
            color: {
                synonymous_variant: "blue",
                coding_sequence_variant: "blue",
                missense_variant: "orange",
                protein_altering_variant: "orange",
                start_lost: "red",
                stop_gained: "red",
                stop_lost: "red",
                stop_retained_variant: "red"
            }
        }
    },
    facet: {
        fields: [
            {
                name: "Chromosome",
                value: "chromosome"
            },
            {
                name: "Studies",
                value: "studies"
            },
            {
                name: "Variant Type",
                value: "type"
            },
            {
                name: "Genes",
                value: "genes"
            },
            {
                name: "Biotypes",
                value: "biotypes"
            },
            {
                name: "Consequence Type",
                value: "soAcc"
            }
        ],
        ranges: [
            {
                name: "PhastCons",
                value: "phastCons"
            },
            {
                name: "PhyloP",
                value: "phylop"
            },
            {
                name: "Gerp",
                value: "gerp"
            },
            {
                name: "CADD Raw",
                value: "caddRaw"
            },
            {
                name: "CADD Scaled",
                value: "caddScaled"
            },
            {
                name: "Sift",
                value: "sift"
            },
            {
                name: "Polyphen",
                value: "polyphen"
            }
        ],
    },
    beacon: {
        hosts: [
            "brca-exchange", "cell_lines", "cosmic", "wtsi", "wgs", "ncbi", "ebi", "ega", "broad", "gigascience", "ucsc", "lovd", "hgmd", "icgc", "sahgp"
        ]
    },
    clinical: {
        variableSet: {
            name: 'clinical_vs',
            exclude:
                [
                    {
                        webComponent: 'variant-samples-filter',
                        variables: ['HPO', 'diagnosis']
                    }
                ],

        },
        chromosomal_gender: [ "XX", "XY", "XO", "XXY", "XXX", "XXYY", "XXXY", "XXXX", "XYY", "OTHER", "UNKNOWN" ],
        ethnicity:
            [
                {
                    id: "white_mediterranean",
                    title: "white mediterranean"
                },
                {
                    id: "white_caucasian",
                    title: "white caucasian"
                },
                {
                    id: "black",
                    title: "black"
                },
                {
                    id: "asiatic",
                    title: "asiatic"
                },
                {
                    id: "amerindian",
                    title: "amerindian"
                },
                {
                    id: "gipsy",
                    title: "gipsy"
                },
                {
                    id: "arabic",
                    title: "arabic"
                },
                {
                    id: "hindu",
                    title: "hindu"
                },
                {
                    id: "australian_native",
                    title: "australian native"
                },
                {
                    id: "askenazi_jew",
                    title: "askenazi jew"
                },
                {
                    id: "sefardi_jew",
                    title: "sefardi jew"
                },
                {
                    id: "ne",
                    title: "NE/Unkonwn"
                }
            ],
        countries: ["Austria", "Belgium", "Bulgaria", "Croatia","Cyprus","Czech Republic","Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden", "United Kingdom", "United States", "Other"],
        province: ["Albacete", 	"Alicante", "Almeria", "Álava", "Asturias", "Ávila", "Badajoz", "Baleares", "Barcelona", "Burgos", "Cáceres",
            "Cádiz","Cantabria", "Castellón","Ceuta", "Ciudad Real", "Cordoba", "Coruña, La", "Cuenca", "Gerona", "Granada", "Guadalajara", "Guipúzcoa", "Huelva",
            "Huesca", "Jaén", "León", "Lérida", "Lugo", "Madrid", "Málaga", "Melilla", "Murcia", "Navarra", "Orense", "Palencia", "Palmas, Las", "Pontevedra", "Rioja, La",
            "Salamanca", "Santa Cruz de Tenerife", "Segovia", "Sevilla", "Soria", "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid", "Vizcaya", "Zamora",
            "Zaragoza"],
        status:
            [
                {
                    id: "affected",
                    title: "affected"
                },
                {
                    id: "parent",
                    title: "parent"
                },
                {
                    id: "obligate_carrierX",
                    title: "obligate carrier chrX"
                },
                {
                    id: "obligate_carrier1_22",
                    title: "obligate carrier chr1-22"
                },
                {
                    id: "relative",
                    title: "relative (of an affected individual and different of parents)"
                },
                {
                    id: "healthy",
                    title: "healthy control"
                },
                {
                    id: "unknown",
                    title: "unknown"
                }
            ],
        sample_type:
            [
                {
                    id: "blood",
                    title: "blood"
                },
                {
                    id: "amniotic_fluid",
                    title: "amniotic fluid"
                },
                {
                    id: "chorionic_villi",
                    title: "chorionic villi"
                },
                {
                    id: "circulating_fetal",
                    title: "circulating fetal"
                },
                {
                    id: "circulating_tumor",
                    title: "circulating tumor"
                },
                {
                    id: "tissue_fresh",
                    title: "tissue (fresh)"
                },
                {
                    id: "other_fluids",
                    title: "other fluids"
                },
                {
                    id: "ne",
                    title: "ne/unknown"
                }
            ],
        cell_line:
        [
            {
                id: "germline",
                title: "constitutive (germline)",
                checked: "true"
            },
            {
                id: "somatic",
                title: "somatic",
                checked: "false"
            }
        ]
    }
};