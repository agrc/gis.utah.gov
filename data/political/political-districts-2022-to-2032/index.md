StateHouseDistricts:
  hub:
    name: Utah House Districts 2022 to 2032
    item_id: 889a6340381d46e38ad4e1ef842a7b2f
  updates:
    - This dataset was last updated in 2022.
StateSenateDistricts:
  hub:
    name: Utah Senate Districts 2022 to 2032
    item_id: e0988dec873241b2851e2216f3f2fb30
  updates:
    - This dataset was last updated in 2022.
StateSchoolBoardDistricts:
  hub:
    name: Utah School Board Districts 2022 to 2032
    item_id: e4650ba7b0b04f60a4a86a7a3526bb3b
  updates:
    - This dataset was last updated in 2022.
UnitedStatesCongressionalDistricts:
  hub:
    name: Utah US Congress Districts 2022 to 2032
    item_id: f86be475250b474d965e42971f50c0d3
  updates:
    - This dataset was last updated in 2022.
---

<figure class="caption caption--right">
  <img class="caption__image" src="{% link images/SenateDistricts2022_Large.png %}" alt="PoliticalDistrictsBig"
    loading="lazy" />
  <figcaption class="caption__text">2022 Political Districts</figcaption>
</figure>
{% include abstract.html
name="Political Districts"
stewards="UGRC and The Lieutenant Governor's Office"
abstract="These political districts will be used for election purposes on January 1, 2023. This page includes
political district boundaries for the Utah State Legislature (state senate districts and state house districts); state
school board districts; and U.S congressional districts. All political districts are set by the legislature and are
updated after a new national census year."
%}

<div class="grid package">
  <div class="grid__col grid__col--12-of-12">
    <h3 id="StateHouseDistricts">State House Districts 2022 to 2032</h3>
    <div class="grid__col grid__col--12-of-12 package-content">
      <img class="inline-text-left outline" src="{% link images/House2022_Small.png %}" alt="StateHouseNew"
        loading="lazy" />
      <p>The Utah House of Representatives is comprised of 75 men and women elected to two-year terms. Utah House
        Districts 2012 shows the house districts that elected officials represent.</p>
      <p>The <code>DIST</code> field contains the House district number.</p>
      <p>The <code>COLOR4</code> field can be used in coloring districts using only 4 colors, usually with no adjacent districts
        displayed with the same color. In the case of the House Districts the number of districts and sizes this does not alway work.</p>
      <p>Statewide Political District Boundaries are drawn by the Utah Legislature and adopted into state law.</p>
      <h5>Related Resources</h5>
      <ul class="dotless">
        <li><a href="https://le.utah.gov/">Utah State Legislature</a></li>
        <li><a href="https://le.utah.gov/house2/index.html">State of Utah House of Representatives</a></li>
      </ul>
    </div>
    {% include packagedata.html
    name="StateHouseDistricts"
    info=page.StateHouseDistricts
    %}
  </div>
</div>

<div class="grid package">
  <div class="grid__col grid__col--12-of-12">
    <h3 id="StateSenateDistricts">State Senate Districts 2022 to 2032</h3>
    <div class="grid__col grid__col--12-of-12 package-content">
      <img class="inline-text-left outline" src="{% link images/SenateDistricts2022_Small.png %}"
        alt="StateSenateNew" loading="lazy" />
      <p>The Utah State Senate is comprised of 29 men and women elected to four-year terms. Utah Senate Districts 2012
        shows the senate districts that elected officials represent.</p>
      <p>The <code>DIST</code> field contains the Senate district number.</p>
      <p>The <code>COLOR4</code> field can be used in coloring districts using only 4 colors, usually with no adjacent districts
        displayed with the same color.</p>
      <p>Statewide Political District Boundaries are drawn by the Utah Legislature and adopted into state law.</p>
      <h5>Related Resources</h5>
      <ul class="dotless">
        <li><a href="https://le.utah.gov/">Utah State Legislature</a></li>
        <li><a href="http://www.utahsenate.org/">Utah State Senate</a></li>
      </ul>
    </div>
    {% include packagedata.html
    name="StateSenateDistricts"
    info=page.StateSenateDistricts
    %}
  </div>
</div>

<div class="grid package">
  <div class="grid__col grid__col--12-of-12">
    <h3 id="StateSchoolBoardDistricts">State School Board Districts 2022 to 2032</h3>
    <div class="grid__col grid__col--12-of-12 package-content">
      <img class="inline-text-left outline" src="{% link images/StateSchoolBoard2022_Small.png %}"
        alt="StateSchoolBoardNew" loading="lazy" />
      <p>The Utah State Board of Education is compromised of 15 districts. Utah School Board Districts 2022 to 2032 shows the
        school board districts that elected officials represent.</p>
      <p>The <code>DIST</code> field contains the State School Board district number.</p>
      <p>The <code>COLOR4</code> field can be used in coloring districts using only 4 colors, usually with no adjacent districts displayed with the same color.</p>
	  <p>The <code>BOARD</code> field has the name of the current board member and is updated as needed.</p>
      <p>Statewide Political District Boundaries are drawn by the Utah Legislature and adopted into state law.</p>
      <h5>Related Resources</h5>
      <ul class="dotless">
        <li><a href="https://le.utah.gov/">Utah State Legislature</a></li>
        <li><a href="https://www.schools.utah.gov/">Utah State Board of Education</a></li>
      </ul>
    </div>
    {% include packagedata.html
    name="StateSchoolBoardDistricts"
    info=page.StateSchoolBoardDistricts
    %}
  </div>
</div>

<div class="grid package">
  <div class="grid__col grid__col--12-of-12">
    <h3 id="UnitedStatesCongressionalDistricts">United States Congressional Districts 2022 to 2032</h3>
    <div class="grid__col grid__col--12-of-12 package-content">
      <img class="inline-text-left outline" src="{% link images/CongressionalDistricts2022_Small.png %}"
        alt="CongressNew" loading="lazy" />
      <p>Political.US Congress Districts 2022 to 2032 shows the U.S congressional districts that elected officials represent.</p>
      <p>The <code>DISTRICT</code> field contains the US Congressional district number.</p>
      <p>Statewide Political District Boundaries are drawn by the Utah Legislature and adopted into state law.</p>
    </div>
    {% include packagedata.html
    name="UnitedStatesCongressionalDistricts"
    info=page.UnitedStatesCongressionalDistricts
    %}
  </div>
</div>
