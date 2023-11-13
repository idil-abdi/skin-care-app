import { Container, Stack } from "react-bootstrap"
import {Item} from '../components/Item'

const products = [
    {
        id: "1",
        productName: "The Ordinary - Niacinamide 10% + Zinc 1%",
        image: "productsImg/img1.png",
        category: "ordinary",
        price: 5,
        displayPrice: "£5.00",
        discription: "Our Niacinamide 10% + Zinc 1%  formula is a water-based serum that boosts skin brightness, improves skin smoothness and reinforces the skin barrier over time. It contains a high 10% concentration of Niacinamide (vitamin b3) and zinc PCA.",
        ingridents: "Aqua (Water), Niacinamide, Pentylene Glycol, Zinc PCA, Tamarindus Indica Seed Gum, Carrageenan, Acacia Senegal Gum, Xanthan Gum, Cocoyl Proline, Ethoxydiglycol, Phenoxyethanol, Chlorphenesin.",
        instruction: "Apply serum to entire face morning and evening before heavier creams.",
        rating: {
            stars: 4.4,
            count: 2049
        }        
    },
    {
        id: "2",
        productName: "The Ordinary Hyaluronic Acid 2% + B5",
        image: "productsImg/img2.png",
        category: "ordinary",
        price: 7.90,
        displayPrice: "£7.90",
        discription: "THE ORDINARY HYALURONIC ACID 2% + B5 This oil-free formula delivers long-lasting hydration to your skin, making it your new daily go-to. The winning combo of Hyaluronic Acid and Vitamin B5 will help with moisture retention on the skin for a plump and smooth complexion with a fresh, dewy feel.",
        ingridents: "Aqua (Water), Sodium Hyaluronate, Sodium Hyaluronate Crosspolymer, Panthenol, Ahnfeltia Concinna Extract, Glycerin, Pentylene Glycol, Propanediol, Polyacrylate Crosspolymer-6, Ppg-26-Buteth-26, Trisodium Ethylenediamine Disuccinate, Citric Acid, Ethoxydiglycol, Caprylyl Glycol, Hexylene Glycol, Ethylhexylglycerin, Phenoxyethanol, Chlorphenesin",
        instruction: "Apply a few drops to face in the morning and evening before cream.",
        rating: {
            stars: 4.3,
            count: 1094,
        }        
    },
    {
        id: "3",
        productName: "The Ordinary Glycolic Acid 7% Toning Solution 240ml",
        image: "productsImg/img3.png",
        category: "ordinary",
        price: 11.50,
        displayPrice: "£11.50",
        discription: `Glycolic Acid is an alpha hydroxyl acid that exfoliates the skin. This 7% toning solution offers mild exfoliation for improved skin radiance and visible clarity. The formula also improves the appearance of skin texture with continued use.      This formula contains a studied Tasmanian Pepperberry derivative to help reduce irritation associated with acid use. This derivative is of plant origin and varies in colour seasonally and this colour variation may be apparent in the formula from time to time. The formula is further supported with inclusion of ginseng root and aloe vera for both visible radiance and soothing benefits.`,
        ingridents: "Glycolic Acid, Aloe Barbadensis Leaf Water, Panax Ginseng Root Extract, Tasmannia Lanceolata Fruit/Leaf Extract",
        instruction: "Use ideally in the PM, no more frequently than once per day. After cleaning, saturate a cotton pad with the formula and sweep across face and neck. Avoid the eye contour and contact with eyes. Do not rinse off. Continue with additional skin treatments as needed.",
        rating: {
            stars: 4.5,
            count: 650
        }        
    },
    {
        id: "4",
        productName: "The Ordinary Natural Moisturizing Factors & HA 30ml",
        image: "productsImg/img4.png",
        category: "ordinary",
        price: 9.90,
        displayPrice: "£9.90",
        discription: "Natural Moisturizing Factors (NMF) are elements that keep the outer layer of the skin protected and well-hydrated. NMF are made up of multiple amino acids, fatty acids, triglycerides, urea, ceramides, phospholipids, glycerin, saccharides, sodium PCA, hyaluronic acid and many other compounds that are naturally present in the skin.            The Natural Moisturizing Factor (NMF) is a group of elements that, together with epidermal lipids, keep the outer layer of the skin protected and well-hydrated. NMF are made up of water-loving compounds, including multiple amino acids, urea, glycerin, saccharides, sodium PCA and hyaluronic acid. Skin lipids are oil-loving and mostly composed of ceramides, fatty acids, cholesterol and many other compounds that are naturally present in the skin. This formula offers non-greasy hydration that mimics the hydration supporting effects of the skin's own NMF and lipid components. It contains 11 amino acids, phospholipids, alpha/beta/gamma fatty acids, triglycerides, sterols and sterol esters, glycerin, ceramide precursors, urea, saccharides, sodium PCA and hyaluronic acid. It offers immediate hydration and lasting results with continued use.",
        ingridents: "Aqua (Water), Caprylic/Capric Triglyceride, Cetyl Alcohol, Propanediol, Stearyl Alcohol, Glycerin, Sodium Hyaluronate, Arginine, Aspartic Acid, Glycine, Alanine, Serine, Valine, Isoleucine, Proline, Threonine, Histidine, Phenylalanine, Glucose, Maltose, Fructose, Trehalose, Sodium PCA, PCA, Sodium Lactate, Urea, Allantoin, Linoleic Acid, Oleic Acid, Phytosteryl Canola Glycerides, Palmitic Acid, Stearic Acid, Lecithin, Triolein, Tocopherol, Carbomer, Isoceteth-20, Polysorbate 60, Sodium Chloride, Citric Acid, Trisodium Ethylenediamine Disuccinate, Pentylene Glycol, Triethanolamine, Sodium Hydroxide, Phenoxyethanol, Chlorphenesin.",
        instruction: "Apply after serums as needed for effective surface hydration.",
        rating: {
            stars: 1,
            count: 1
        }        
    },
    {
        id: "5",
        productName: "The Ordinary The Daily Set",
        image: "productsImg/img5.png",
        category: "ordinary",
        price: 16.70,
        displayPrice: "£16.70",
        discription: "Squalana Cleanser 50ml: A Gentle, Moisturizing Facial Cleanser   HYALURONIC ACID 2% + B5 30ml: A hydration support formula with ultra-pure, vegan hyaluronic acid          NATURAL MOISTURIZING FACTORS + HA 30ml: Surface hydration formula",
        ingridents: "N/A",
        instruction: "A gentle cleansing product formulated to target makeup removal whilst leaving the skin feeling smooth and moisturized. The formula incorporates Squalane, alongside other lipophilic esters that are gentle, moisturizing, efficient in dissolving makeup and facial impurities and increasing the spreadability of the product. When rubbed between your palms for approximately 10-30 seconds, the product undergoes an important textural change from a balm-like consistency to a clear oil-like consistency. This allows the emulsifying sucrose esters in the formula to trap and blend the dissolved makeup and facial impurities with water for rinsing. Being non-comedogenic and soap-free, this formula is designed to be gentle enough for daily use, without over-drying the skin, making it suitable for all skin types.            Hyaluronic Acid (HA) can attract up to 1,000 times its weight in water. The molecular size of HA determines its depth of delivery in the skin. This formulation combines low-, medium- and high-molecular weight HA, as well as a next-generation HA crosspolymer at a combined concentration of 2% for multi-depth hydration in a water-based formula. This system is supported with the addition of Vitamin B5 which also enhances surface hydration.          Natural Moisturizing Factors (NMF) are elements that keep the outer layer of the skin protected and well-hydrated. NMF are made up of multiple amino acids, fatty acids, triglycerides, urea, ceramides, phospholipids, glycerin, saccharides, sodium PCA, hyaluronic acid and many other compounds that are naturally present in the skin.",
        rating: {
            stars: 4.6,
            count: 228
        }        
    },
    {
        id: "6",
        productName: "The Ordinary Multi-Peptide + HA Serum 30ml",
        image: "productsImg/img6.png",
        category: "ordinary",
        price: 14.30,
        displayPrice: "£14.30",
        discription: "‘Buffet’ is now Multi-Peptide + HA Serum. Peptides this powerful deserve to be on the label.         This universal formula combines a comprehensive array of technologies to improve skin smoothness and target multiple signs of aging at once. By utilizing five well-studied peptide technologies, skin-friendly amino acids, and multiple hyaluronic acid complexes, it helps significantly improve the appearance of crow's feet, as well as improving the feel of skin elasticity and firmness.        Reduces the appearance of crow’s feet wrinkles after 8 weeks.*         Improves the look of skin smoothness in 8 weeks.*",
        ingridents: "Aqua (Water), Glycerin, Lactococcus Ferment Lysate, Acetyl Hexapeptide-8, Pentapeptide-18, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Palmitoyl Tripeptide-38, Dipeptide Diaminobutyroyl Benzylamide Diacetate, Acetylarginyltryptophyl Diphenylglycine, Sodium Hyaluronate Crosspolymer, Sodium Hyaluronate, Allantoin, Glycine, Alanine, Serine, Valine, Isoleucine, Proline, Threonine, Histidine, Phenylalanine, Arginine, Aspartic Acid, Trehalose, Fructose, Glucose, Maltose, Urea, Sodium PCA, PCA, Sodium Lactate, Citric Acid, Hydroxypropyl Cyclodextrin, Sodium Chloride, Sodium Hydroxide, Butylene Glycol, Pentylene Glycol, Acacia Senegal Gum, Xanthan Gum, Carbomer, Polysorbate 20, PPG-26-Buteth-26, PEG-40 Hydrogenated Castor Oil, Trisodium Ethylenediamine Disuccinate, Ethoxydiglycol, Sodium Benzoate, Caprylyl Glycol, Ethylhexylglycerin, Phenoxyethanol, Chlorphenesin.",
        instruction: "Apply a few drops to the face in the morning and evening",
        rating: {
            stars: 4.3,
            count: 448
        }        
    },
    {
        id: "7",
        productName: "The Ordinary The Most-Loved Set",
        image: "productsImg/img7.png",
        category: "ordinary",
        price: 11.00,
        displayPrice: "£11.00",
        discription: "The Most-Loved Set includes three of The Ordinary’s most popular products in miniature sizes. It makes an ideal gift set for those new to skincare, or looking to try something new from The Ordinary.           The Niacinamide 10% + Zinc 1% is a universal serum for blemish-prone skin that boosts skin brightness, improves skin smoothness, and reinforces the skin barrier over time. It contains a high 10% concentration of niacinamide (vitamin b3) and Zinc PCA.           The Hyaluronic Acid 2% + B5 is a hydrating serum that smoothes and plumps, while targeting the appearance of wrinkles and textural irregularities. It combines low, medium and high-molecular weight hyaluronic acid molecules and a next-generation HA crosspolymer to support hydration to multiple layers of the skin while strengthening the skin barrier.          The Caffeine Solution 5% + EGCG is a depuffing solution for tired eyes. It reduces the look of puffiness and dark circles in the eye contour, by combining a high concentration of caffeine with a highly-purified epigallocatechin gallatyl glucoside (EGCG).",
        ingridents: "Niacinamide 10% + Zinc 1%:          Aqua (Water), Niacinamide, Pentylene Glycol, Zinc PCA, Dimethyl Isosorbide, Tamarindus Indica Seed Gum, Xanthan Gum, Isoceteth-20, Ethoxydiglycol, Phenoxyethanol, Chlorphenesin.             Hyaluronic Acid 2% + B5:           Aqua (Water), Sodium Hyaluronate, Pentylene Glycol, Propanediol, Sodium Hyaluronate Crosspolymer, Panthenol, Ahnfeltia Concinna Extract, Glycerin, Trisodium Ethylenediamine Disuccinate, Citric Acid, Isoceteth-20, Ethoxydiglycol, Ethylhexylglycerin, Hexylene Glycol, 1,2-Hexanediol, Phenoxyethanol, Caprylyl Glycol.       Caffeine Solution 5% + EGCG:              Aqua (Water), Caffeine, Maltodextrin, Glycerin, Propanediol, Epigallocatechin Gallatyl Glucoside, Gallyl Glucoside, Hyaluronic Acid, Oxidized Glutathione, Melanin, Glycine Soja (Soybean) Seed Extract, Pentylene Glycol, Hydroxyethylcellulose, Polyacrylate Crosspolymer-6, Xanthan gum, Lactic Acid, Dehydroacetic Acid, Trisodium Ethylenediamine Disuccinate, Propyl Gallate, Dimethyl Isosorbide, Benzyl Alcohol, 1,2-Hexanediol, Ethylhexylglycerin, Phenoxyethanol, Caprylyl Glycol.",
        instruction: `Niacinamide 10% + Zinc 1%:  Apply a few drops to the face in the morning and evening. If irritation occurs, rinse oﬀ, cease use, and consult a physician. Use only as directed on unbroken skin. Patch testing prior to use is advised. Keep out of reach of children.     Hyaluronic Acid 2% + B5:    Apply a few drops to the face in the morning and evening. If irritation occurs, rinse off, cease use, and consult a physician. Use only as directed on unbroken skin. Patch testing prior to use is advised. Keep out of reach of children.     Caffeine Solution 5% + EGCG:      Apply a small amount onto the eye contour in the morning and evening. If irritation occurs, rinse off, cease use, and consult a physician. Use only as directed on unbroken skin. Patch testing prior to use is advised. Keep out of reach of children.`,
        rating: {
            stars: 3.9,
            count: 9
        }        
    },
]


export const Items = () => {
    return (
        <Container>
            <Stack direction="horizontal" gap={3} className="flex-wrap justify-content-center">
                {products.map((product) => {
                    return <Item key={crypto.randomUUID()} product={product}/>
                })}
            </Stack>
        </Container>
    )
}