import { ProductType, SgidCategory, type IMetadata } from '@models/products/sgid/types';
interface IExternalMetadata extends IMetadata {
  subCategory: string;
  serviceUrl: string;
}

export const externalSgidEntries: IExternalMetadata[] = [
  {
    title: 'Workspace Accessibility',
    stewards: ['WFRC'],
    serviceUrl: 'https://data.wfrc.org/datasets/access-to-opportunities-work-related-taz-based',
    type: ProductType.POLYGON,
    category: SgidCategory.PLANNING,
    subCategory: 'Accessibility',
    description: `Workplace Access to Opportunities (ATO) metrics for typical peak period auto and transit commutes, at the
        Traffic Analysis Zone (TAZ) level. Includes measures for household (access to jobs) and employer (access to
        workers/customers) perspectives. These datasets use a 'distance decay' travel cost weighting based on typical
        Wasatch Front commuting and are designed to take the place of "jobs within x minutes" datasets. This extent of
        this dataset currently is the Wasatch Front urban area although this will soon be expanded statewide. <a href="https://wfrc.org/ato"> More info on ATO</a>`,
  },
  {
    title: 'Household and Employment Intensity',
    stewards: ['WFRC'],
    serviceUrl: 'https://data.wfrc.org/datasets/commute-source-intensity',
    type: ProductType.POLYGON,
    category: SgidCategory.PLANNING,
    subCategory: 'Accessibility',
    description: `A quick summary of residential and employment intensity within ~1/4 mile for city-block-sized polygons in the
        Wasatch Front urban areas. This roughly represents commuter trip producing and attracting areas. <a
          href="https://wfrc.org/ato"> More info on ATO</a>`,
  },
  {
    title: 'Equity Focus Areas (WFRC Area)',
    stewards: ['WFRC'],
    serviceUrl: 'https://data.wfrc.org/datasets/equity-focus-areas-2023',
    type: ProductType.POLYGON,
    category: SgidCategory.PLANNING,
    subCategory: 'Demographic',
    description: `WFRC has adopted an Equity Focus Area (EFA) framework as an input to its transportation planning efforts. EFAs
        are census block groups where either of the following criteria (last updated in 2023) are met: > 20% low income or > 40% Persons of Color`,
  },
  {
    title: 'Community Centers',
    stewards: ['WFRC'],
    serviceUrl: 'https://data.wfrc.org/datasets/community-centers',
    type: ProductType.POINT,
    category: SgidCategory.PLANNING,
    subCategory: 'Destinations',
    description: `Recreation centers, libraries, and other community recreation facilities along the Wasatch Front`,
  },
  {
    title: 'Community Services',
    stewards: ['WFRC'],
    serviceUrl: 'https://data.wfrc.org/datasets/community-services',
    type: ProductType.POINT,
    category: SgidCategory.PLANNING,
    subCategory: 'Destinations',
    description: `Community services along the Wasatch Front including city halls, county offices, courthouses, food banks,
        human services, the state capitol, vehicle services, and workforce services. Locations were primarily derived
        from digitizing or geocoding office locations listed on various state and nonprofit websites (DMV, Utah Food
        Bank, DWS).`,
  },
  {
    title: 'Grocery Stores',
    stewards: ['WFRC'],
    serviceUrl: 'https://data.wfrc.org/datasets/utah-grocery-and-food-stores-udaf',
    type: ProductType.POINT,
    category: SgidCategory.PLANNING,
    subCategory: 'Destinations',
    description: `Grocery Stores and other food stores from the Utah Department of Agriculture and Food (UDAF) database (2018).
        Use the 'TYPE' field to filter by type of store.`,
  },
  {
    title: 'Grocery Stores',
    stewards: ['WFRC', 'US Department of Homeland Security HIFLD'],
    serviceUrl: 'https://data.wfrc.org/datasets/utah-child-care-centers',
    type: ProductType.POINT,
    category: SgidCategory.PLANNING,
    subCategory: 'Destinations',
    description: `Child care and preschool facilities from the US DHS Homeland Infrastructure Foundation-Level Data (HIFLD) open data site.`,
  },
  {
    title: 'Retail Centers',
    stewards: ['WFRC'],
    serviceUrl: 'https://data.wfrc.org/datasets/retail-centers',
    type: ProductType.POINT,
    category: SgidCategory.PLANNING,
    subCategory: 'Destinations',
    description: `Locations of shopping malls and retail centers along the Wasatch Front.`,
  },
  {
    title: 'Mobile Home Parks',
    stewards: ['WFRC'],
    serviceUrl: 'https://data.wfrc.org/datasets/mobile-home-parks',
    type: ProductType.POINT,
    category: SgidCategory.PLANNING,
    subCategory: 'Housing',
    description: `Mobile Home parks in the Wasatch Front and Wasatch back areas (Davis, Morgan, Salt Lake, Summit, Tooele, Utah,
        Wasatch, Weber counties.`,
  },
  {
    title: 'Generalized Future Land Use',
    stewards: ['WFRC'],
    serviceUrl: 'https://data.wfrc.org/datasets/generalized-future-land-use-2020',
    type: ProductType.POLYGON,
    category: SgidCategory.PLANNING,
    subCategory: 'Land Use',
    description: `A generalized interpretation (2020) of city and county general plans in the WFRC urban area. General plans
        present a community's aspirations for allowable future land use types and intensities.`,
  },
  {
    title: 'Generalized Future Land Use',
    stewards: ['WFRC'],
    serviceUrl: 'https://data.wfrc.org/datasets/generalized-future-land-use-2020',
    type: ProductType.POLYGON,
    category: SgidCategory.PLANNING,
    subCategory: 'Land Use',
    description: `A generalized interpretation (2020) of city and county general plans in the WFRC urban area. General plans
        present a community's aspirations for allowable future land use types and intensities.`,
  },
  {
    title: 'Wasatch Choice Urban Centers',
    stewards: ['WFRC', 'MAG'],
    serviceUrl: 'https://data.wfrc.org/datasets/wasatch-choice-2050-centers-vision-map',
    type: ProductType.POLYGON,
    category: SgidCategory.PLANNING,
    subCategory: 'Land Use',
    description: `This dataset represents the regionally significant centers and other specialized land use from the Wasatch
        Choice 2050 Vision Map. Land use types in this dataset include four levels of centers (metropolitan, urban,
        city, neighborhood), employment districts, education districts, industrial districts, and special districts
        (airports, mining, military, etc.).`,
  },
  {
    title: 'Annual Average Daily Traffic (AADT), Historic & Forecasted',
    stewards: ['WFRC', 'MAG', 'Cache MPO', 'Dixie MPO', 'UDOT'],
    serviceUrl: 'https://data.wfrc.org/datasets/utah-statewide-traffic-volume-historic-and-forecast',
    type: ProductType.POLYGON,
    category: SgidCategory.PLANNING,
    subCategory: 'Transportation',
    description: `This statewide traffic volume GIS dataset contains observed (historic, from UDOT) and forecasted traffic
        volumes (from MPOs and UDOT) on highways and major roads.`,
  },
  {
    title: 'Annual Average Daily Traffic (AADT), Historic & Forecasted',
    stewards: ['WFRC', 'MAG', 'Cache MPO', 'Dixie MPO', 'UDOT'],
    serviceUrl: 'https://wfrc.org/traffic-volume-map/',
    type: ProductType.WEB_MAP,
    category: SgidCategory.PLANNING,
    subCategory: 'Transportation',
    description: `This statewide traffic volume viewer shows observed (historic, from UDOT) and forecasted traffic volumes (from
        MPOs and UDOT) on highways and major roads. The advanced tab allows for traffic volumes to be seen in the
        context of forecasted population, employment, and future regional transportation projects.`,
  },
  {
    title: 'Average Commute Times',
    stewards: ['WFRC', 'MAG'],
    serviceUrl: 'https://data.wfrc.org/datasets/average-taz-commute-times',
    type: ProductType.POLYGON,
    category: SgidCategory.PLANNING,
    subCategory: 'Transportation',
    description: `Projected average auto and transit commute times (one way) for residents of Wasatch Front traffic analysis
        zones (TAZs) for 2019, 2030, 2040, & 2040.`,
  },
  {
    title: 'Functional Class (Roadways)',
    stewards: ['UDOT'],
    serviceUrl: 'https://data-uplan.opendata.arcgis.com/datasets/functional-class',
    type: ProductType.POLYLINE,
    category: SgidCategory.PLANNING,
    subCategory: 'Transportation',
    description: `UDOT Functional Class definitions (interstate, other freeway/expressway, principal/minor arterial, major/minor
        collector, etc.) for existing and planned UDOT and federal aid eligible roads. This dataset can be viewed in
        this <a
          href="https://www.arcgis.com/home/webmap/viewer.html?webmap=494d57208ea4464bb664ac2da38f9c91">webmap</a>.`,
  },
  {
    title: 'Major Transit Investment Corridors (per SB34)',
    stewards: ['WFRC'],
    serviceUrl: 'https://data.wfrc.org/datasets/sb34-major-transit-investment-corridors',
    type: ProductType.POLYGON,
    category: SgidCategory.PLANNING,
    subCategory: 'Transportation',
    description: `UDOT Functional Class definitions (interstate, other freeway/expressway, principal/minor arterial, major/minor
        collector, etc.) for existing and planned UDOT and federal aid eligible roads. This dataset can be viewed in
        this <a
          href="https://www.arcgis.com/home/webmap/viewer.html?webmap=494d57208ea4464bb664ac2da38f9c91">webmap</a>.`,
  },
];
