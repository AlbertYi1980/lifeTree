import {Component, ElementRef, ViewChild} from '@angular/core';
import {parse} from "./NewickParser";
import {TreeDrawer} from "./TreeDrawer";
import {$e} from "codelyzer/angular/styles/chars";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  @ViewChild("container", {static: true})
  container: ElementRef;
  private get context(): CanvasRenderingContext2D {
    return this.canvas.getContext('2d');
  }
  private get width(): number{
    return  this.canvas.width;
  };
  private  get height(): number{
    return this.canvas.height;
  };
  private canvas : any;

  ngOnInit() {
    this.canvas = this.container.nativeElement;
    this.resizeCanvasToDisplaySize(this.canvas);
  }



  private count = 0;

  go() {

    this.clear();

    this.context.translate(10 * (this.count++), 0)
    this.draw();

  }

  private clear(){
    this.context.save();
    this.context.resetTransform();
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.restore();
  }


  private draw() {
    this.context.save();
    this.context.translate(this.width / 2, this.height / 2);
    this.context.strokeStyle = '#8b8b8b'
    const data = (parse(this.getData()))[0];

    let drawer = new TreeDrawer(this.context, {
      maxDepth: 100,
      beta: 0.5,
      s: 40,
      n: 4,
      k: 0.2,
      r: 400,
      w: 100
    });

    drawer.draw(data);
    this.context.restore();
  }

  private getRandomColor() {
    const letters = '0123456789ABCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.round(Math.random() * 15)];
    }
    return color;
  }

  private getData(): string {
    return "(((((((((Sequoia_sempervirens:0.006125574273,(Callitris_intratropica:0.004594180704,(Juniperus_procera:0.003062787136,Calocedrus_macrolepis:0.003062787136):0.001531393568):0.001531393568):0.004594180704,(Taxus_brevifolia:0.001531393568,Taxus_floridana:0.001531393568)Taxus_ott684213:0.009188361409):0.009188361409,((Araucaria_cunninghamii:0.003062787136,(Araucaria_laubenfelsii:0.001531393568,Araucaria_muelleri:0.001531393568):0.001531393568):0.003062787136,(Araucaria_araucana:0.001531393568,Araucaria_hunsteinii:0.001531393568):0.004594180704)Araucaria_ott786680:0.01378254212):0.02450229709,((((Pinus_maximartinezii:0.004594180704,(Pinus_strobus:0.003062787136,(Pinus_lambertiana:0.001531393568,Pinus_kwangtungensis:0.001531393568):0.001531393568):0.001531393568)Strobus_ott1005718:0.007656967841,((Pinus_sylvestris:0.001531393568,Pinus_nigra:0.001531393568):0.004594180704,(Pinus_palustris:0.003062787136,(Pinus_ponderosa:0.001531393568,Pinus_jeffreyi:0.001531393568):0.001531393568):0.003062787136)Pinus_subgenus_Pinus_ott531304:0.006125574273)Pinus_ott771683:0.003062787136,(Picea_glehnii:0.001531393568,Picea_jezoensis:0.001531393568):0.01378254211):0.007656967841,(Tsuga_canadensis:0.006125574273,(Abies_sachalinensis:0.004594180704,(Abies_homolepis:0.003062787136,(Abies_concolor:0.001531393568,Abies_magnifica:0.001531393568):0.001531393568):0.001531393568):0.001531393568):0.01684532925):0.02143950995):0.01531393568,(((Zamia_amblyphyllidia:0.003062787136,(Ceratozamia_norstogii:0.001531393568,Ceratozamia_mirandae:0.001531393568)Ceratozamia_ott379052:0.001531393568):0.007656967841,((Dioon_caputoi:0.003062787136,(Dioon_sonorense:0.003062787136,Dioon_merolae:0.003062787136):0):0.003062787136,(Dioon_edule:0.001531393568,Dioon_spinulosum:0.001531393568):0.004594180704)Dioon_ott582850:0.004594180704):0.003062787136,(Encephalartos_cycadifolius:0.001531393568,Encephalartos_villosus:0.001531393568):0.01225114855):0.04594180704)Acrogymnospermae_ott5296507:0.9173047473,((((((Thesium_subsucculentum:0.3537519142,(((((((((Leontopodium_alpinum:0.04900459418,((Thelesperma_megapotamicum:0.02450229709,((Coespeletia_timotensis:0.01378254211,((Tetraneuris_herbacea:0.003062787136,(Helenium_virginicum:0.001531393568,Balduina_angustifolia:0.001531393568)Gaillardiinae_ott757757:0.001531393568)Helenieae_ott557770:0.01071975498,(Ratibida_columnifera:0.007656967841,(Balsamorhiza_sagittata:0.007656967841,(Echinacea_angustifolia:0.007656967841,(Helianthus_divaricatus:0.003062787136,(Ambrosia_deltoidea:0.001531393568,Ambrosia_dumosa:0.001531393568)Ambrosia_ott601709:0.001531393568):0.004594180704):0):0)Heliantheae_ott557772:0.006125574273):0):0.01071975498,((Liatris_scariosa:0.003062787136,(Eupatorium_resinosum:0.001531393568,Eupatorium_perfoliatum:0.001531393568):0.001531393568)Eupatorieae_ott557774:0.02143950995,(Arnica_angustifolia:0.003062787136,(Argyroxiphium_sandwicense_subsp._macrocephalum:0.001531393568,Holocarpha_macradenia:0.001531393568)Madiinae_ott1091741:0.001531393568)Madieae_ott578403:0.02143950995):0):0)Heliantheae_alliance_ott757761:0.02450229709,(((Conyza_canadensis:0.009188361409,(Erigeron_kachinensis:0.009188361409,(Boltonia_decurrens:0.009188361409,(Pyrrocoma_radiata:0.009188361409,(Pityopsis_aspera:0.009188361409,(Solidago_mollis:0.001531393568,Solidago_canadensis_var._scabra:0.001531393568)Solidago_ott872351:0.007656967841):0):0):0):0)North_American_clade_ott445368:0.004594180704,(Tetramolopium_arenarium:0.003062787136,(Aster_amellus:0.001531393568,Aster_pyrenaeus:0.001531393568)Aster_ott5507594:0.001531393568)Australasian_lineages_ott124080:0.01071975498)Astereae_ott1084166:0.03522205207,((Jacobaea_vulgaris:0.001531393568,Senecio_filaginoides:0.001531393568)Senecioninae_ott349491:0.04747320061,(Artemisia_genipi:0.003062787136,(Santolina_melidensis:0.003062787136,Achillea_millefolium:0.003062787136):0)Anthemideae_ott557765:0.04594180704):0):0):0)Asteroideae_ott1084160:0.01531393568,(Sonchus_pustulatus:0.01378254211,(Malacothrix_indecora:0.01378254211,(Lactuca_virosa:0.01378254211,((Tragopogon_dubius:0.003062787136,(Scorzonera_humilis:0.001531393568,Scorzonera_hispanica:0.001531393568)Scorzonera_ott485929:0.001531393568)Scorzonerinae_ott472093:0.01071975498,((Taraxacum_erythrospermum:0.001531393568,Taraxacum_officinale:0.001531393568)Taraxacum_ott524978:0.01225114855,(Picris_hieracioides:0.001531393568,Hypochaeris_radicata:0.001531393568)Hypochaeridinae_ott472096:0.01225114855):0):0):0):0)Cichorieae_ott578387:0.05053598775):0.03062787136,(Carlina_vulgaris:0.02909647779,((Cheirolophus_metlesicsii:0.007656967841,(Centaurea_maculosa:0.006125574273,(Centaurea_corymbosa:0.006125574273,(Centaurea_jacea:0.006125574273,(Centaurea_stoebe:0.006125574273,Centaurea_horrida:0.006125574273):0):0):0)Centaurea_ott5507653:0.001531393568)Centaureinae_ott627941:0.02143950995,(Jurinea_fontqueri:0.01837672282,(Carduus_nutans:0.01837672282,(Saussurea_medusa:0.01837672282,(Cirsium_pitcheri:0.01378254211,(Cirsium_acaule:0.01378254211,(Cirsium_dissectum:0.01378254211,(Cirsium_scariosum:0.01378254211,(Cirsium_arvense:0.01378254211,(Cirsium_vulgare:0.01378254211,(Cirsium_palustre:0.01378254211,(Cirsium_pannonicum:0.01378254211,(Cirsium_undulatum:0.01378254211,Cirsium_perplexans:0.01378254211):0):0):0):0):0):0):0):0)Cirsium_ott70338:0.004594180704):0):0)Carduinae_ott627940:0.01071975498):0)Cardueae_ott557760:0.06584992343):0.004594180704,(Lobelia_boykinii:0.003062787136,(Adenophora_potaninii:0.001531393568,Adenophora_lobophylla:0.001531393568)Adenophora_ott94695:0.001531393568)Campanulaceae_ott1086303:0.09647779479):0.0336906585,(((Sambucus_racemosa_subsp._sieboldiana:0.001531393568,Viburnum_furcatum:0.001531393568)Adoxaceae_ott757494:0.007656967841,(Succisa_pratensis:0.006125574273,(Lonicera_maackii:0.004594180704,(Nardostachys_grandiflora:0.003062787136,(Scabiosa_columbaria:0.001531393568,Dipsacus_fullonum:0.001531393568):0.001531393568):0.001531393568):0.001531393568)Caprifoliaceae_ott1042135:0.003062787136)Dipsacales_ott659705:0.02297090352,((Mulinum_spinosum:0.01837672282,((Sanicula_europaea:0.004594180704,(Eryngium_cuneifolium:0.003062787136,(Eryngium_maritimum:0.003062787136,Eryngium_alpinum:0.003062787136):0)Eryngium_ott64762:0.001531393568)Saniculeae_ott589861:0.01225114855,(Pimpinella_saxifraga:0.01071975498,(((Chaerophyllum_aureum:0.003062787136,(Daucus_carota:0.001531393568,Laserpitium_longiradium:0.001531393568)Daucinae_ott823074:0.001531393568)Scandiceae_ott298518:0.003062787136,(Heracleum_mantegazzianum:0.001531393568,Carum_carvi:0.001531393568):0.004594180704):0.004594180704,(Lomatium_cookii:0.001531393568,Lomatium_bradshawii:0.001531393568)Lomatium_ott5513145:0.009188361409):0):0.006125574273):0.001531393568):0.003062787136,(Panax_quinquefolius:0.001531393568,Dendropanax_trifidus:0.001531393568)Araliaceae_ott524079:0.01990811639):0.01071975498):0.1010719755):0.06891271057,(((Ramonda_myconi:0.0382848392,(((Lantana_camara:0.01378254211,((Dicerandra_frutescens:0.003062787136,(Thymus_webbianus:0.001531393568,Thymus_loscosii:0.001531393568)Thymus_ott907454:0.001531393568):0.009188361409,((Erythranthe_lewisii:0.003062787136,(Erythranthe_guttata:0.003062787136,Erythranthe_cardinalis:0.003062787136):0)Erythranthe_ott5334418:0.004594180704,(Pedicularis_furbishiae:0.003062787136,(Melampyrum_pratense:0.001531393568,Rhinanthus_minor:0.001531393568):0.001531393568):0.004594180704):0.004594180704):0.001531393568):0.009188361409,((Avicennia_marina:0.001531393568,Avicennia_germinans:0.001531393568)Avicennia_ott582594:0.006125574273,(Pinguicula_alpina:0.004594180704,(Pinguicula_vulgaris:0.004594180704,(Pinguicula_ionantha:0.004594180704,Pinguicula_villosa:0.004594180704):0):0)Pinguicula_ott659715:0.003062787136):0.01531393568):0.01378254211,(Digitalis_purpurea:0.01225114855,(Veronica_arvensis:0.01225114855,(Collinsia_verna:0.009188361409,((Anarrhinum_fruticosum:0.004594180704,(Pseudomisopates_rivas-martinezii:0.004594180704,(Antirrhinum_lopesianum:0.001531393568,Antirrhinum_subbaeticum:0.001531393568)Antirrhinum_ott596453:0.003062787136):0)Antirrhineae_ott182044:0.003062787136,(Plantago_media:0.001531393568,Plantago_coronopus:0.001531393568)Plantago_ott609811:0.006125574273):0.001531393568):0.003062787136):0)Plantaginaceae_ott1041309:0.02450229709):0.001531393568)Core_Lamiales_ott5263556:0.01071975498,(Phacelia_insularis:0.009188361409,((Myosotis_ramosissima:0.004594180704,(Oreocarya_flava:0.003062787136,(Cynoglossum_officinale:0.001531393568,Cynoglossum_virginianum:0.001531393568)Cynoglossum_ott97434:0.001531393568):0.001531393568):0.003062787136,(Lithospermum_ruderale:0.001531393568,Echium_vulgare:0.001531393568):0.006125574273):0.001531393568)Boraginales_ott5261925:0.03981623277):0.01837672282,(((Stenaria_nigricans:0.004594180704,(Guettarda_viburnoides:0.003062787136,(Calycophyllum_spruceanum:0.001531393568,Gardenia_actinocarpa:0.001531393568):0.001531393568):0.001531393568)Rubiaceae_ott1014022:0.009188361409,((Asclepias_meadii:0.003062787136,(Himatanthus_drasticus:0.001531393568,Alyxia_stellata:0.001531393568)Rauvolfioideae_ott741503:0.001531393568)Apocynaceae_ott524059:0.004594180704,(Gentiana_pneumonanthe:0.003062787136,(Gentianella_campestris:0.003062787136,Frasera_speciosa:0.003062787136):0)Gentianeae_ott707911:0.004594180704):0.006125574273)Gentianales_ott524062:0.003062787136,(Fabiana_imbricata:0.001531393568,Ipomoea_leptophylla:0.001531393568):0.01531393568):0.05053598775):0.134762634):0.04287901991,(Impatiens_capensis:0.04134762634,((((Camellia_japonica:0.01378254211,(((Leucopogon_setiger:0.006125574273,((Rhododendron_maximum:0.001531393568,Rhododendron_ponticum:0.001531393568):0.003062787136,(Calluna_vulgaris:0.001531393568,Erica_ciliaris:0.001531393568):0.003062787136):0.001531393568)Ericaceae_ott66730:0.003062787136,(Sarracenia_alata:0.001531393568,Sarracenia_purpurea:0.001531393568)Sarracenia_ott639943:0.007656967841):0.003062787136,(Styrax_obassia:0.001531393568,Pyxidanthera_brevifolia:0.001531393568):0.01071975498):0.001531393568):0.01837672282,((((Primula_elatior:0.006125574273,(Primula_vulgaris:0.006125574273,(Primula_veris:0.006125574273,(Primula_farinosa:0.006125574273,Primula_nutans:0.006125574273):0):0):0)Primula_ott545827:0.003062787136,(Androsace_vitaliana:0.001531393568,Androsace_elongata:0.001531393568)Androsace_ott210342:0.007656967841):0.004594180704,(Ardisia_escallonioides:0.003062787136,(Ardisia_elliptica:0.003062787136,Ardisia_guianensis:0.003062787136):0)Ardisia_ott776703:0.01071975498)Primulaceae_ott486216:0.003062787136,(Pouteria_sagotiana:0.001531393568,Manilkara_zapota:0.001531393568):0.01531393568):0.01531393568):0.004594180704,(Polemonium_van-bruntiae:0.003062787136,(Ipomopsis_tenuituba:0.001531393568,Ipomopsis_aggregata:0.001531393568)Ipomopsis_ott581707:0.001531393568)Polemoniaceae_ott814217:0.0336906585):0.003062787136,(Bertholletia_excelsa:0.001531393568,Grias_peruviana:0.001531393568)Lecythidaceae_ott429494:0.0382848392):0.001531393568)Ericales_ott648892:0.2036753446):0.003062787136,(Cornus_florida:0.001531393568,Hydrangea_paniculata:0.001531393568)Cornales_ott229290:0.2465543645)asterids_ott1008294:0.1041347626,(((((Escobaria_robbinsiorum:0.0336906585,(Lophophora_diffusa:0.0336906585,(Ferocactus_crispatus:0.0336906585,(Echinocactus_platyacanthus:0.0336906585,(Coryphantha_werdermannii:0.0336906585,(Pediocactus_bradyi:0.0336906585,((Ariocarpus_fissuratus:0.001531393568,Ariocarpus_scaphirostris:0.001531393568)Ariocarpus_ott220915:0.03215926493,((Mammillaria_huitzilopochtli:0.01531393568,(Mammillaria_supertexta:0.01531393568,(Mammillaria_crucigera:0.01531393568,(Mammillaria_baumii:0.01531393568,(Mammillaria_dixanthocentron:0.01531393568,(Mammillaria_napina:0.01531393568,(Mammillaria_pectinifera:0.01531393568,(Mammillaria_mystax:0.01531393568,(Mammillaria_magnimamma:0.01531393568,(Mammillaria_hernandezii:0.01531393568,Mammillaria_scolymoides:0.01531393568):0):0):0):0):0):0):0):0):0)Mammillaria_ott1076965:0.01837672282,(Astrophytum_ornatum:0.004594180704,(Astrophytum_myriostigma:0.004594180704,(Astrophytum_capricorne:0.004594180704,Astrophytum_asterias:0.004594180704):0):0)Astrophytum_ott220908:0.02909647779):0):0):0):0):0):0):0)Cacteae_ott801070:0.01684532925,(Escontria_chiotilla:0.01531393568,(Mitrocereus_fulviceps:0.01531393568,(Carnegiea_gigantea:0.01531393568,(Stenocereus_eruca:0.01531393568,(Cephalocereus_senilis:0.01531393568,((Pachycereus_gaumeri:0.001531393568,Pachycereus_pecten-aboriginum:0.001531393568)Pachycereus_ott141040:0.01378254211,(Neobuxbaumia_macrocephala:0.004594180704,(Neobuxbaumia_tetetzo:0.004594180704,(Neobuxbaumia_mezcalaensis:0.004594180704,Neobuxbaumia_polylopha:0.004594180704):0):0)Neobuxbaumia_ott322818:0.01071975498):0):0):0):0):0)Echinocereeae_ott801074:0.03522205207)Cactoideae_ott227063:0.006125574273,(Opuntia_microdasys:0.004594180704,(Opuntia_macrocentra:0.004594180704,(Opuntia_macrorhiza:0.004594180704,Opuntia_rastrera:0.004594180704):0):0)Opuntia_ott151083:0.05206738132):0.02603369066,((Petrocoptis_pseudoviscosa:0.01837672282,(Sabulina_rossii:0.01837672282,(Arenaria_serpyllifolia:0.01837672282,(Minuartia_obtusiloba:0.01837672282,((Silene_acaulis:0.006125574273,(Silene_tatarica:0.006125574273,(Silene_spaldingii:0.006125574273,(Silene_regia:0.006125574273,Silene_douglasii:0.006125574273):0):0):0)Silene_ott842205:0.01225114855,((Paronychia_jamesii:0.001531393568,Paronychia_pulvinata:0.001531393568)Paronychia_ott848752:0.01684532925,(Cerastium_pumilum:0.001531393568,Cerastium_fontanum:0.001531393568)Cerastium_ott842191:0.01684532925):0):0):0):0):0)Caryophyllaceae_ott317818:0.006125574273,(Kali_australe:0.004594180704,(Atriplex_vesicaria:0.003062787136,(Atriplex_acanthocarpa:0.003062787136,Atriplex_canescens:0.003062787136):0)Atriplex_ott892390:0.001531393568):0.01990811639):0.05819295559):0.01990811639,((Eriogonum_longifolium:0.007656967841,(Persicaria_perfoliata:0.006125574273,((Rumex_rupestris:0.001531393568,Rumex_obtusifolius:0.001531393568)Rumex_ott904386:0.003062787136,(Polygonum_basiramium:0.001531393568,Polygonum_nesomii:0.001531393568)Polygonum_ott43733:0.003062787136):0.001531393568)Polygonoideae_ott839947:0.001531393568)Polygonaceae_ott904376:0.01071975498,((Armeria_maritima:0.003062787136,(Armeria_merinoi:0.003062787136,Armeria_caespitosa:0.003062787136):0)Armeria_ott941995:0.006125574273,(Limonium_carolinianum:0.004594180704,(Limonium_delicatulum:0.004594180704,(Limonium_lilacinum:0.004594180704,Limonium_narbonense:0.004594180704):0):0)Limonium_ott387506:0.004594180704)Plumbaginaceae_ott532273:0.009188361409):0.08422664625)Caryophyllales_ott216628:0.2496171516):0.001531393568):0.2771822358,(((Guaiacum_sanctum:0.1638591118,(((Acacia_victoriae:0.08422664625,(Stryphnodendron_microstachyum:0.08422664625,(Periandra_mediterranea:0.08422664625,(Acacia_bilimekii:0.08422664625,((Dicorynia_guianensis:0.07044410413,(((Andira_aubletii:0.03981623277,((((Eremosparton_songoricum:0.01837672282,((Oxytropis_jabalambrensis:0.01071975498,(Astragalus_michauxii:0.01071975498,(Astragalus_alopecurus:0.01071975498,(Astragalus_tremolsianus:0.01071975498,(Astragalus_cremnophylax:0.01071975498,(Astragalus_scaphoides:0.01071975498,(Astragalus_tyghensis:0.01071975498,Astragalus_peckii:0.01071975498):0):0):0):0):0):0):0.006125574273,(Lathyrus_vernus:0.004594180704,(Trifolium_pratense:0.003062787136,(Trifolium_parryi:0.001531393568,Trifolium_dasyphyllum:0.001531393568):0.001531393568):0.001531393568):0.01225114855):0.001531393568):0.006125574273,(Sesbania_vesicaria:0.004594180704,(Anthyllis_vulneraria:0.003062787136,(Lotus_corniculatus:0.001531393568,Lotus_arinagensis:0.001531393568)Lotus_ott879017:0.001531393568):0.001531393568):0.01990811639):0.006125574273,((Phaseolus_lunatus:0.001531393568,Psoralidium_tenuiflorum:0.001531393568):0.003062787136,(Lespedeza_cuneata:0.001531393568,Lespedeza_virginica:0.001531393568)Lespedeza_ott653601:0.003062787136):0.02603369066):0.009188361409,(Adesmia_volckmannii:0.006125574273,((Pterocarpus_angolensis:0.001531393568,Platymiscium_filipes:0.001531393568):0.003062787136,(Aeschynomene_virginica:0.001531393568,Machaerium_cuspidatum:0.001531393568):0.003062787136):0.001531393568):0.0336906585):0):0.01071975498,((Lupinus_tidestromii:0.003062787136,(Lupinus_lepidus:0.001531393568,Lupinus_arboreus:0.001531393568):0.001531393568)Lupinus_ott878988:0.006125574273,(Cytisus_scoparius:0.004594180704,(Adenocarpus_gibbsianus:0.003062787136,(Ulex_gallii:0.001531393568,Ulex_minor:0.001531393568)Ulex_ott539555:0.001531393568):0.001531393568):0.004594180704):0.04134762634):0.01837672282,(Acacia_suaveolens:0.01684532925,(((Acacia_aneura:0.007656967841,(Pentaclethra_macroloba:0.006125574273,(Vachellia_pennatula:0.004594180704,(Prosopis_flexuosa:0.003062787136,(Prosopis_laevigata:0.003062787136,Prosopis_glandulosa:0.003062787136):0)Prosopis_ott5509277:0.001531393568):0.001531393568):0.001531393568):0.003062787136,(Parkinsonia_aculeata:0.001531393568,Mora_paraensis:0.001531393568):0.009188361409):0.004594180704,(Cassia_nemophila:0.003062787136,(Chamaecrista_fasciculata:0.001531393568,Chamaecrista_lineata:0.001531393568)Chamaecrista_ott959682:0.001531393568):0.01225114855):0.001531393568):0.05206738132):0.001531393568):0.01378254211,(Prioria_copaifera:0.006125574273,(Dicymbe_altsonii:0.006125574273,(Eperua_falcata:0.006125574273,(Tetraberlinia_bifoliolata:0.006125574273,Microberlinia_bisulcata:0.006125574273):0):0):0)Detarieae_ott792364:0.07810107198):0):0):0):0)Fabaceae_ott560323:0.04900459418,((Cucurbita_pepo:0.01837672282,(Fuscospora_fusca:0.01684532925,((Castanea_dentata:0.007656967841,((Fagus_grandifolia:0.003062787136,(Fagus_sylvatica:0.003062787136,Fagus_crenata:0.003062787136):0)Fagus_ott1028998:0.004594180704,(Quercus_rugosa:0.001531393568,Quercus_mongolica_subsp._crispula:0.001531393568)Quercus_ott791121:0.006125574273):0)Fagaceae_ott267713:0.007656967841,((Annamocarya_sinensis:0.001531393568,Pterocarya_rhoifolia:0.001531393568)Juglandaceae_ott438186:0.004594180704,(Alnus_incana_subsp._rugosa:0.003062787136,(Betula_pubescens_subsp._tortuosa:0.001531393568,Betula_nana:0.001531393568)Betula_ott267715:0.001531393568)Betulaceae_ott791138:0.003062787136):0.009188361409):0.001531393568)Fagales_ott267709:0.001531393568):0.02909647779,((((Rubus_ursinus:0.003062787136,(Rubus_saxatilis:0.003062787136,Rubus_discolor:0.003062787136):0)Rubus_ott972648:0.01378254211,((Agrimonia_eupatoria:0.009188361409,((Fragaria_vesca:0.004594180704,(Horkelia_congesta:0.003062787136,(Potentilla_anserina:0.001531393568,Potentilla_recta:0.001531393568)Potentilla_ott5342278:0.001531393568)Potentilleae_unplaced_ott827034:0.001531393568)Potentilleae_ott891491:0.003062787136,(Rosa_canina:0.001531393568,Rosa_multiflora:0.001531393568)Rosa_ott259066:0.006125574273):0.001531393568):0.003062787136,(Geum_reptans:0.001531393568,Geum_rivale:0.001531393568)Geum_ott259063:0.01071975498):0.004594180704):0.004594180704,(Purshia_subintegra:0.003062787136,(Prunus_serotina:0.001531393568,Prunus_africana:0.001531393568)Prunus_ott731578:0.001531393568):0.01837672282)Rosaceae_ott208036:0.006125574273,((Ziziphus_mauritiana:0.001531393568,Paliurus_ramosissimus:0.001531393568)Paliureae_ott784649:0.003062787136,(Cecropia_obtusifolia:0.001531393568,Brosimum_alicastrum:0.001531393568):0.003062787136):0.02297090352)Rosales_ott208031:0.01990811639):0.08575803982):0.02909647779,(((((Rhizophora_mangle:0.006125574273,(Licania_heteromorpha:0.004594180704,(Linum_tenuifolium:0.003062787136,(Linum_catharticum:0.003062787136,Linum_flavum:0.003062787136):0)Linum_ott1000260:0.001531393568):0.001531393568):0.004594180704,(Euphorbia_fontqueriana:0.003062787136,(Triadica_sebifera:0.001531393568,Actinostemon_concolor:0.001531393568)Hippomaneae_ott520957:0.001531393568):0.007656967841):0.003062787136,(Phyllanthus_indofischeri:0.001531393568,Phyllanthus_emblica:0.001531393568)Phyllanthus_ott5509975:0.01225114855):0.01071975498,((Salix_arctica:0.006125574273,(Viola_sagittata:0.004594180704,(Viola_elatior:0.004594180704,(Viola_stagnina:0.004594180704,Viola_pumila:0.004594180704):0):0)Viola_ott295597:0.001531393568):0.003062787136,(Garcinia_lucida:0.001531393568,Hypericum_cumulicola:0.001531393568):0.007656967841):0.01531393568):0.003062787136,(Rourea_induta:0.001531393568,Oxalis_acetosella:0.001531393568):0.02603369066):0.134762634):0.001531393568)fabids_ott565281:0.1056661562,((Stachyurus_macrocarpus:0.08728943338,((Aesculus_turbinata:0.02450229709,(((Ailanthus_altissima:0.007656967841,(Entandrophragma_cylindricum:0.006125574273,(Swietenia_macrophylla:0.006125574273,(Khaya_senegalensis:0.006125574273,(Cedrela_odorata:0.006125574273,Carapa_guianensis:0.006125574273):0):0):0)Meliaceae_ott655984:0.001531393568):0.009188361409,((Bursera_glabrifolia:0.001531393568,Boswellia_papyrifera:0.001531393568)Burseraceae_ott350867:0.006125574273,(Choerospondias_axillaris:0.004594180704,(Sclerocarya_birrea:0.004594180704,(Rhus_copallinum:0.001531393568,Rhus_aromatica:0.001531393568)Rhus_ott350866:0.003062787136):0)Anacardiaceae_ott423320:0.003062787136):0.009188361409):0.007656967841,(Acer_palmatum_subsp._amoenum:0.004594180704,(Acer_saccharum:0.004594180704,(Acer_rufinerve:0.004594180704,Acer_pictum_subsp._mono:0.004594180704):0):0)Acer_ott948922:0.01990811639):0)Sapindales_ott229288:0.06125574273,((Cleome_droserifolia:0.02909647779,(Cochlearia_pyrenaica:0.02756508423,(Cochlearia_bavarica:0.02756508423,((Draba_asterophora:0.01378254211,(Parolinia_glabriuscula:0.01378254211,(Anastatica_hierochuntica:0.01378254211,(Lobularia_maritima:0.01378254211,((Rorippa_palustris:0.004594180704,(Lepidium_davisii:0.003062787136,(Boechera_fecunda:0.001531393568,Lesquerella_ovalifolia:0.001531393568):0.001531393568):0.001531393568):0.003062787136,(Braya_fernaldii:0.001531393568,Braya_longii:0.001531393568)Braya_ott682506:0.006125574273):0.006125574273):0):0):0):0.01378254211,(Thlaspi_perfoliatum:0.009188361409,(Alliaria_petiolata:0.007656967841,((Isatis_tinctoria:0.003062787136,(Brassica_insularis:0.001531393568,Brassica_napus:0.001531393568)Brassica_ott309288:0.001531393568):0.003062787136,(Vella_pseudocytisus_subsp._paui:0.001531393568,Vella_pseudocytisus_subsp._pseudocytisus:0.001531393568)Vella_pseudocytisus_ott805084:0.004594180704):0.001531393568):0.001531393568):0.01837672282):0):0)Brassicaceae_ott309271:0.001531393568)Brassicales_ott8844:0.03062787136,(((Vatica_hainanensis:0.01071975498,(Parashorea_chinensis:0.01071975498,(Anisoptera_laevis:0.01071975498,(Shorea_acuminata:0.006125574273,(Shorea_maxwelliana:0.006125574273,(Shorea_leprosula:0.006125574273,(Shorea_ovalis:0.006125574273,Shorea_bracteolata:0.006125574273):0):0):0)Shorea_ott30498:0.004594180704):0):0)Dipterocarpoideae_ott879491:0.009188361409,(Fumana_procumbens:0.007656967841,(Hudsonia_montana:0.007656967841,((Helianthemum_polygonoides:0.001531393568,Helianthemum_motae:0.001531393568)Helianthemum_ott343132:0.006125574273,(Lechea_deckertii:0.001531393568,Lechea_cernua:0.001531393568)Lechea_ott677499:0.006125574273):0):0)Cistaceae_ott343135:0.01225114855):0.009188361409,((Sphaeralcea_coccinea:0.003062787136,(Abutilon_theophrasti:0.003062787136,Kosteletzkya_pentacarpos:0.003062787136):0)Malvoideae_ott469942:0.004594180704,(Aquilaria_microcarpa:0.003062787136,(Aquilaria_malaccensis:0.003062787136,Aquilaria_crassna:0.003062787136):0)Aquilaria_ott918280:0.004594180704):0.02143950995):0.03062787136):0.02603369066):0.001531393568):0.01684532925,((((Clidemia_hirta:0.003062787136,(Miconia_prasina:0.001531393568,Miconia_albicans:0.001531393568)Miconia_ott5510570:0.001531393568)Melastomataceae_ott489621:0.004594180704,(Syzygium_jambos:0.003062787136,(Psidium_guajava:0.003062787136,Melaleuca_viridiflora:0.003062787136):0)Myrtoideae_ott5740779:0.004594180704):0.004594180704,(Lythrum_salicaria:0.003062787136,(Oenothera_deltoides:0.001531393568,Chamerion_latifolium:0.001531393568)Onagroideae_ott5740793:0.001531393568):0.009188361409)Myrtales_ott648898:0.003062787136,(Geranium_sylvaticum:0.001531393568,Erodium_paularense:0.001531393568):0.01378254211):0.08882082695)malvids_ott565277:0.1653905054)rosids_ott1008296:0.006125574273,(Echeveria_longissima:0.004594180704,(Saxifraga_tridactylites:0.003062787136,(Saxifraga_cotyledon:0.001531393568,Saxifraga_aizoides:0.001531393568):0.001531393568)Saxifragaceae_ott1035588:0.001531393568):0.2710566616):0.3552833078)Pentapetalae_ott5316182:0.007656967841,(Roupala_montana:0.006125574273,(Petrophile_pulchella:0.006125574273,(Banksia_ericifolia:0.006125574273,(Persoonia_lanceolata:0.001531393568,Persoonia_mollis_subsp._nectens:0.001531393568)Persoonia_ott29551:0.004594180704):0):0)Proteaceae_ott209175:0.6324655436):0.02297090352,((Dicentra_canadensis:0.004594180704,(Sarcocapnos_enneaphylla:0.003062787136,(Sarcocapnos_pulcherrima:0.003062787136,Sarcocapnos_baetica:0.003062787136):0)Sarcocapnos_ott188908:0.001531393568)Fumarioideae_ott438104:0.01684532925,(Podophyllum_peltatum:0.01531393568,(Hydrastis_canadensis:0.01378254211,((Aquilegia_chrysantha:0.009188361409,((Actaea_elata:0.003062787136,(Actaea_cordifolia:0.003062787136,Actaea_spicata:0.003062787136):0)Actaea_ott693562:0.004594180704,(Ranunculus_peltatus:0.003062787136,(Anemone_patens:0.001531393568,Anemone_americana:0.001531393568)Anemone_ott385038:0.001531393568):0.004594180704):0.001531393568):0.003062787136,(Trollius_europaeus:0.001531393568,Trollius_laxus:0.001531393568)Trollius_ott1011767:0.01071975498):0.001531393568)Ranunculaceae_ott387826:0.001531393568):0.006125574273):0.6401225115)eudicotyledons_ott431495:0.2388973966,((Ruppia_maritima:0.007656967841,((Heteropsis_macrophylla:0.003062787136,(Heteropsis_oblongifolia:0.003062787136,Heteropsis_flexuosa:0.003062787136):0)Heteropsis_ott226639:0.003062787136,(Arisaema_triphyllum:0.001531393568,Arisaema_serratum:0.001531393568)Arisaema_ott1027662:0.004594180704):0.001531393568)Alismatales_ott399481:0.2297090352,(Dioscorea_chouardii:0.2281776417,((((((Dracaena_cinnabari:0.009188361409,(Furcraea_parmentieri:0.007656967841,((Anthericum_ramosum:0.001531393568,Anthericum_liliago:0.001531393568)Anthericum_ott655588:0.004594180704,(Agave_marmorata:0.003062787136,(Agave_angustifolia:0.003062787136,Agave_potatorum:0.003062787136):0)Agave_ott973369:0.003062787136):0.001531393568)Agavoideae_ott361629:0.001531393568):0.007656967841,(Narcissus_poeticus:0.006125574273,(Allium_vineale:0.004594180704,(Allium_sativum:0.004594180704,(Allium_monanthum:0.004594180704,Allium_tricoccum:0.004594180704):0):0)Allium_ott781603:0.001531393568):0.01071975498):0.003062787136,(Iris_germanica:0.001531393568,Iris_hexagona:0.001531393568)Iris_ott229529:0.01837672282):0.03215926493,(Corallorhiza_trifida:0.03062787136,(Cleistesiopsis_divaricata:0.03062787136,(((Lepanthes_eltoroensis:0.003062787136,(Lepanthes_rubripetala:0.003062787136,Lepanthes_rupestris:0.003062787136):0)Lepanthes_ott661663:0.004594180704,(Guarianthe_aurantiaca:0.003062787136,(Jacquiniella_leucomelana:0.001531393568,Jacquiniella_teretifolia:0.001531393568)Jacquiniella_ott562586:0.001531393568)Laeliinae_ott406684:0.004594180704)Epidendreae_ott22154:0.02297090352,(((Ophrys_sphegodes:0.009188361409,(Herminium_monorchis:0.009188361409,(Orchis_purpurea:0.009188361409,(Dactylorhiza_lapponica:0.009188361409,(Neotinea_ustulata:0.009188361409,(Himantoglossum_hircinum:0.009188361409,Platanthera_hookeri:0.009188361409):0):0):0):0):0)Orchidinae_ott73433:0.006125574273,(Cypripedium_lentiginosum:0.004594180704,(Cypripedium_calceolus:0.004594180704,(Cypripedium_fasciculatum:0.004594180704,Cypripedium_parviflorum:0.004594180704):0):0)Cypripedium_ott530301:0.01071975498):0.01531393568,(Lycaste_aromatica:0.001531393568,Aspasia_principissa:0.001531393568)Maxillarieae_ott595046:0.02909647779):0):0):0)Orchidaceae_ott568878:0.02143950995)Asparagales_ott557124:0.1470137825,((((Syngonanthus_nitens:0.05206738132,((Bromus_tectorum:0.01990811639,(((((Poa_alpina:0.001531393568,Arctophila_fulva:0.001531393568)Poinae_ott837414:0.003062787136,(Festuca_gracillima:0.001531393568,Festuca_eskia:0.001531393568)Loliinae_ott107346:0.003062787136)Poeae_Chloroplast_Group_2_-Poeae_type-_ott5759324:0.006125574273,(Phalaris_brachystachys:0.004594180704,(Calamagrostis_canescens:0.003062787136,(Anthoxanthum_odoratum:0.001531393568,Koeleria_macrantha:0.001531393568):0.001531393568):0.001531393568):0.006125574273)Poeae_ott415737:0.004594180704,(Elymus_repens:0.003062787136,(Hordeum_vulgare_subsp._spontaneum:0.001531393568,Agropyron_cristatum:0.001531393568):0.001531393568)Triticeae_ott693954:0.01225114855):0.004594180704,(Austrostipa_aristiglumis:0.001531393568,Achnatherum_calamagrostis:0.001531393568)Stipeae_ott415709:0.01837672282):0)Pooideae_ott641464:0.03062787136,(Oryza_sativa:0.02909647779,(Molinia_caerulea:0.02756508423,(Danthonia_sericea:0.02756508423,(Aristida_bipartita:0.02756508423,((Anthaenantia_lanata:0.01531393568,((Zea_diploperennis:0.01071975498,((Hyparrhenia_diplandra:0.003062787136,(Schizachyrium_brevifolium:0.001531393568,Schizachyrium_sanguineum:0.001531393568)Schizachyrium_ott338457:0.001531393568)Andropogoninae_ott5759519:0.007656967841,(Themeda_triandra:0.004594180704,(Heteropogon_contortus:0.004594180704,(Bothriochloa_ischaemum:0.001531393568,Bothriochloa_insculpta:0.001531393568)Bothriochloa_ott761203:0.003062787136):0)Anthistiriinae_ott5759523:0.006125574273):0)Andropogoneae_ott475213:0.004594180704,(Setaria_incrassata:0.001531393568,Digitaria_eriantha:0.001531393568)Paniceae_ott475211:0.01378254211):0)Panicoideae_ott641461:0.01225114855,((Bouteloua_rigidiseta:0.003062787136,(Swallenia_alexandrae:0.003062787136,Hilaria_mutica:0.003062787136):0)Cynodonteae_ott1001523:0.003062787136,(Sporobolus_alterniflorus:0.001531393568,Sporobolus_heterolepis:0.001531393568)Sporobolus_ott728964:0.004594180704)Chloridoideae_ott119855:0.02143950995):0):0):0)PACMAD_clade_ott119852:0.001531393568):0.02143950995):0.001531393568):0.006125574273,(Eriophorum_triste:0.004594180704,(Carex_membranacea:0.003062787136,(Carex_humilis:0.003062787136,Carex_bigelowii:0.003062787136):0)Carex_ott554313:0.001531393568)Cyperoideae_ott423248:0.05359877489):0.01990811639,(((Tillandsia_brachycaulos:0.01225114855,(Tillandsia_flexuosa:0.01225114855,(Tillandsia_violacea:0.01225114855,(Tillandsia_recurvata:0.01225114855,(Tillandsia_juncea:0.01225114855,(Tillandsia_macdougallii:0.01225114855,(Tillandsia_multicaulis:0.01225114855,(Tillandsia_punctulata:0.01225114855,Tillandsia_deppeana:0.01225114855):0):0):0):0):0):0):0):0.003062787136,(Catopsis_compacta:0.001531393568,Catopsis_sessiliflora:0.001531393568)Catopsis_ott455049:0.01378254211):0.003062787136,(Aechmea_nudicaulis:0.001531393568,Aechmea_magdalenae:0.001531393568):0.01684532925):0.05972434916)Poales_ott921871:0.067381317,(((Podococcus_barteri:0.02909647779,(Iriartea_deltoidea:0.02909647779,((Rhopalostylis_sapida:0.003062787136,(Dypsis_decaryi:0.003062787136,Ptychosperma_macarthurii:0.003062787136):0)Areceae_ott491534:0.02603369066,((Euterpe_edulis:0.003062787136,(Euterpe_precatoria:0.003062787136,Euterpe_oleracea:0.003062787136):0)Euterpe_ott458101:0.02603369066,(((Phytelephas_seemannii:0.001531393568,Pseudophoenix_sargentii:0.001531393568)Ceroxyloideae_ott102446:0.004594180704,(Attalea_humilis:0.003062787136,(Astrocaryum_aculeatissimum:0.001531393568,Astrocaryum_mexicanum:0.001531393568)Astrocaryum_ott995207:0.001531393568)Cocoseae_ott491539:0.003062787136):0.02297090352,((Geonoma_schottiana:0.006125574273,(Geonoma_orbignyana:0.006125574273,(Geonoma_macrostachys:0.006125574273,(Geonoma_brevispatha:0.006125574273,Geonoma_deversa:0.006125574273):0):0):0)Geonoma_ott868423:0.02297090352,(Chamaedorea_elegans:0.001531393568,Chamaedorea_radicalis:0.001531393568)Chamaedorea_ott736873:0.02756508423):0):0):0):0):0):0.01684532925,((Borassus_aethiopum:0.006125574273,((Sabal_yapa:0.001531393568,Sabal_minor:0.001531393568)Sabal_ott104307:0.004594180704,(Thrinax_radiata:0.001531393568,Coccothrinax_readii:0.001531393568)Cryosophileae_ott889448:0.004594180704):0)Coryphoideae_ott491536:0.03981623277,((Daemonorops_poilanei:0.003062787136,(Calamus_rhabdocladus:0.001531393568,Calamus_platyacanthos:0.001531393568)Calamus_ott452625:0.001531393568)Calaminae_ott20553:0.004594180704,(Mauritia_flexuosa:0.003062787136,(Laccosperma_secundiflorum:0.001531393568,Eremospatha_macrocarpa:0.001531393568)Ancistrophyllinae_ott20556:0.001531393568)Lepidocaryeae_ott20555:0.004594180704)Calamoideae_ott102447:0.0382848392):0)Arecaceae_ott526437:0.01990811639,(((Calathea_marantifolia:0.003062787136,(Calathea_micans:0.003062787136,Calathea_ovandensis:0.003062787136):0)Calathea_ott156264:0.003062787136,(Heliconia_metallica:0.001531393568,Heliconia_acuminata:0.001531393568)Heliconia_ott730914:0.004594180704)Zingiberales_ott627015:0.01225114855,(((Murdannia_nudiflora:0.001531393568,Murdannia_simplex:0.001531393568):0.003062787136,(Commelina_benghalensis:0.001531393568,Commelina_bracteosa:0.001531393568):0.003062787136):0.006125574273,((Tradescantia_fluminensis:0.001531393568,Tradescantia_blossfeldiana:0.001531393568):0.003062787136,(Tradescantia_zebrina:0.001531393568,Tradescantia_brevifolia:0.001531393568):0.003062787136)Tradescantia_ott877742:0.006125574273)Commelinaceae_ott877745:0.007656967841):0.04747320061):0.07963246554)commelinids_ott225270:0.05359877489):0.02756508423,((Erythronium_japonicum:0.01378254211,(Clintonia_borealis:0.01378254211,((Calochortus_obispoensis:0.007656967841,(Calochortus_tiburonensis:0.007656967841,(Calochortus_lyallii:0.007656967841,(Calochortus_albus:0.007656967841,(Calochortus_pulchellus:0.007656967841,Calochortus_macrocarpus:0.007656967841):0):0):0):0)Calochortus_ott121708:0.006125574273,(Fritillaria_camschatcensis:0.001531393568,Fritillaria_meleagris:0.001531393568)Fritillaria_ott172933:0.01225114855):0):0)Liliaceae_ott781605:0.01225114855,((Disporum_smilacinum:0.001531393568,Disporum_sessile:0.001531393568)Disporum_ott739640:0.02450229709,(Chamaelirium_luteum:0.007656967841,(Trillium_grandiflorum:0.006125574273,(Trillium_camschatcense:0.006125574273,(Trillium_ovatum:0.006125574273,(Trillium_persistens:0.006125574273,Trillium_apetalon:0.006125574273):0):0):0)Trillium_ott76108:0.001531393568)Melanthiaceae_ott430236:0.01837672282):0)Liliales_ott258488:0.2006125574):0.001531393568):0.009188361409):0.663093415):0.01531393568,(Asarum_canadense:0.01378254211,(((Magnolia_salicifolia:0.003062787136,(Magnolia_fordiana:0.003062787136,Magnolia_dealbata:0.003062787136):0)Magnolia_ott288480:0.004594180704,(Virola_surinamensis:0.003062787136,(Duguetia_neglecta:0.001531393568,Oxandra_asbeckii:0.001531393568)Annonaceae_ott98426:0.001531393568):0.004594180704)Magnoliales_ott288466:0.004594180704,(Chlorocardium_rodiei:0.003062787136,(Lindera_benzoin:0.001531393568,Lindera_umbellata:0.001531393568)Lindera_ott498682:0.001531393568)Lauraceae_ott913246:0.009188361409):0.001531393568)Magnoliidae_ott31010:0.9019908116)Mesangiospermae_ott5298374:0.06125574273)Spermatophyta_ott10218:0.007656967841,(Botrychium_mormo:0.006125574273,((Polystichum_setiferum:0.001531393568,Polystichum_aculeatum:0.001531393568)Polystichum_ott667493:0.003062787136,(Asplenium_scolopendrium:0.001531393568,Asplenium_cuneifolium:0.001531393568):0.003062787136):0.001531393568)Moniliformopses_ott166292:0.97856049)Euphyllophyta_ott1007992:0.006125574272,(Gracilaria_gracilis:0.003062787136,(Gelidium_sesquipedale:0.003062787136,Mazzaella_splendens:0.003062787136):0)Rhodymeniophycidae_ott5275832:0.9877488515):0.009188361409,((Tolumnia:0.003062787136,(Simulium_erectum:0.001531393568,Perigonia_glaucescens:0.001531393568):0.001531393568):0.004594180704,(Coprinopsis_cinerea:0.003062787136,(Vulpicida_pinastri:0.001531393568,Lepraria_sanguinolenta:0.001531393568)Lecanorales_ott306155:0.001531393568)Division=Dikarya_ott5602101:0.004594180704)Opisthokonta_ott332573:0.9923430322)Eukaryota_ott304358;";
  }

  private dragging:boolean = false;
  private _startX = 0;
  private _startY = 0;

  mouseDown($event: MouseEvent) {

    this.dragging = true;
    this._startX = $event.offsetX;
    this._startY = $event.offsetY;
    this.canvas.setPointerCapture(1);
    console.log('down')
  }

  mouseUp($event: MouseEvent) {
    this.dragging = false;
    this.canvas.setPointerCapture(1);
    console.log('up')
  }

  mouseMove($event: MouseEvent) {
    if (this.dragging){
      let deltaX = $event.offsetX - this._startX;
      let deltaY = $event.offsetY - this._startY;
      this.context.resetTransform();
      this.context.translate(deltaX, deltaY);
      this.clear();
      this.draw();
    }
  }



  onResize() {
    console.log('resize')
    this.resizeCanvasToDisplaySize(this.canvas);
  }

  private resizeCanvasToDisplaySize(canvas) {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }
  }
}



















