/* eslint @typescript-eslint/camelcase: 0, @typescript-eslint/no-unused-vars: 0, max-lines: 0 */
import { RESTDataSource } from 'apollo-datasource-rest';
import { DataListingArgs, DataAggregationArgs, MultiTransFormationArgs, AuthContext } from '../../../types';
import { entity_detail_52e18549_ec43_438d_accd_09e57adba7e9 } from '../../custom/widgetResolvers/entity_detail_52e18549_ec43_438d_accd_09e57adba7e9';
import { object_listing_095dfbc9_3e93_4b0c_bc62_6b0f2c26a425 } from '../../custom/widgetResolvers/object_listing_095dfbc9_3e93_4b0c_bc62_6b0f2c26a425';
import { object_listing_0b79bfe3_3751_416d_afdb_56368f570184 } from '../../custom/widgetResolvers/object_listing_0b79bfe3_3751_416d_afdb_56368f570184';
import { object_listing_0daa8ec2_f8aa_4250_b292_2dd49a32de6f } from '../../custom/widgetResolvers/object_listing_0daa8ec2_f8aa_4250_b292_2dd49a32de6f';
import { object_listing_14af3bf8_c910_4b7d_a69f_e5c13bd6f260 } from '../../custom/widgetResolvers/object_listing_14af3bf8_c910_4b7d_a69f_e5c13bd6f260';
import { object_listing_57ba35fa_13bf_4f15_ad4e_f0d81b62c550 } from '../../custom/widgetResolvers/object_listing_57ba35fa_13bf_4f15_ad4e_f0d81b62c550';
import { object_listing_6652108c_5a53_4e63_a76f_6784340429ce } from '../../custom/widgetResolvers/object_listing_6652108c_5a53_4e63_a76f_6784340429ce';
import { object_listing_765f387f_c23f_47b9_91a2_d7bf11537869 } from '../../custom/widgetResolvers/object_listing_765f387f_c23f_47b9_91a2_d7bf11537869';
import { object_listing_873cc59c_799b_42f3_a52c_6bbce52b6d2f } from '../../custom/widgetResolvers/object_listing_873cc59c_799b_42f3_a52c_6bbce52b6d2f';
import { object_listing_a87fc383_0a3c_48ec_bfce_66a86b481d97 } from '../../custom/widgetResolvers/object_listing_a87fc383_0a3c_48ec_bfce_66a86b481d97';
import { object_listing_a9c8448c_5ebb_41bf_983d_eadd54b1e8cf } from '../../custom/widgetResolvers/object_listing_a9c8448c_5ebb_41bf_983d_eadd54b1e8cf';
import { object_listing_b5efe6df_f7b8_46eb_9c5c_a5f692ed56fb } from '../../custom/widgetResolvers/object_listing_b5efe6df_f7b8_46eb_9c5c_a5f692ed56fb';
import { object_listing_d1f03749_9428_43a6_81d2_cfc1366bbab3 } from '../../custom/widgetResolvers/object_listing_d1f03749_9428_43a6_81d2_cfc1366bbab3';
import { object_listing_d25f057c_1f7e_4fcf_b7c9_55f8de73e3d9 } from '../../custom/widgetResolvers/object_listing_d25f057c_1f7e_4fcf_b7c9_55f8de73e3d9';
import { object_listing_e915eed6_556f_4343_ba04_004d1e429082 } from '../../custom/widgetResolvers/object_listing_e915eed6_556f_4343_ba04_004d1e429082';
import { object_listing_f38b8082_6d77_4e8b_81d4_3c7a39611e0e } from '../../custom/widgetResolvers/object_listing_f38b8082_6d77_4e8b_81d4_3c7a39611e0e';
import { object_listing_fedfb9da_f1b9_4b8c_bd53_97d7da52671d } from '../../custom/widgetResolvers/object_listing_fedfb9da_f1b9_4b8c_bd53_97d7da52671d';
import { widget_04315240_b0ab_4990_8bfe_a10b3d05f98a } from '../../custom/widgetResolvers/widget_04315240_b0ab_4990_8bfe_a10b3d05f98a';
import { widget_097af69f_2455_4993_b0e5_62cb4f50c50e } from '../../custom/widgetResolvers/widget_097af69f_2455_4993_b0e5_62cb4f50c50e';
import { widget_1075e94e_ad5d_423d_aa6e_084c1157b7d0 } from '../../custom/widgetResolvers/widget_1075e94e_ad5d_423d_aa6e_084c1157b7d0';
import { widget_175e5113_b3a2_4dd7_904a_db2d69b801f5 } from '../../custom/widgetResolvers/widget_175e5113_b3a2_4dd7_904a_db2d69b801f5';
import { widget_1bf5e483_aee0_4d3a_8d38_8447c96ba57f } from '../../custom/widgetResolvers/widget_1bf5e483_aee0_4d3a_8d38_8447c96ba57f';
import { widget_1df19de6_78f9_4c7b_91c6_8a1229a768c0 } from '../../custom/widgetResolvers/widget_1df19de6_78f9_4c7b_91c6_8a1229a768c0';
import { widget_22855164_7cc2_4b7d_8772_c90f0d54e8c4 } from '../../custom/widgetResolvers/widget_22855164_7cc2_4b7d_8772_c90f0d54e8c4';
import { widget_28625961_64d7_424c_bf41_9ef87e476c8f } from '../../custom/widgetResolvers/widget_28625961_64d7_424c_bf41_9ef87e476c8f';
import { widget_28cc8c50_1f73_4589_a015_7e039b786521 } from '../../custom/widgetResolvers/widget_28cc8c50_1f73_4589_a015_7e039b786521';
import { widget_2955b638_00b8_4d4f_8233_41b85184c801 } from '../../custom/widgetResolvers/widget_2955b638_00b8_4d4f_8233_41b85184c801';
import { widget_2ad43285_0ac5_4b6d_a401_f14c63eecf3f } from '../../custom/widgetResolvers/widget_2ad43285_0ac5_4b6d_a401_f14c63eecf3f';
import { widget_3865655c_a83f_4848_b963_21942f33b3d2 } from '../../custom/widgetResolvers/widget_3865655c_a83f_4848_b963_21942f33b3d2';
import { widget_42a2b0a9_b0d7_405c_91d0_2c48797646ea } from '../../custom/widgetResolvers/widget_42a2b0a9_b0d7_405c_91d0_2c48797646ea';
import { widget_4680d179_a146_49c2_94e5_1f8d89c36505 } from '../../custom/widgetResolvers/widget_4680d179_a146_49c2_94e5_1f8d89c36505';
import { widget_5081d20a_c065_4439_99e0_9b55549a7e7b } from '../../custom/widgetResolvers/widget_5081d20a_c065_4439_99e0_9b55549a7e7b';
import { widget_74a505f3_8cd6_49cb_81cd_3c88cfd26711 } from '../../custom/widgetResolvers/widget_74a505f3_8cd6_49cb_81cd_3c88cfd26711';
import { widget_7af0c100_c352_463e_9633_0a0447cec0f7 } from '../../custom/widgetResolvers/widget_7af0c100_c352_463e_9633_0a0447cec0f7';
import { widget_7fb069e3_7b2b_4ee8_81a4_3191f7972acc } from '../../custom/widgetResolvers/widget_7fb069e3_7b2b_4ee8_81a4_3191f7972acc';
import { widget_838a2038_360a_439d_9b35_a580ab127715 } from '../../custom/widgetResolvers/widget_838a2038_360a_439d_9b35_a580ab127715';
import { widget_8f597d1f_2478_4ba2_b43c_2c230172ca99 } from '../../custom/widgetResolvers/widget_8f597d1f_2478_4ba2_b43c_2c230172ca99';
import { widget_9a53f00f_2d78_4680_8066_4833234fede9 } from '../../custom/widgetResolvers/widget_9a53f00f_2d78_4680_8066_4833234fede9';
import { widget_9b59bb7d_f94c_4a2c_81d6_ce38ad6c356d } from '../../custom/widgetResolvers/widget_9b59bb7d_f94c_4a2c_81d6_ce38ad6c356d';
import { widget_a3ea9bf4_d82e_49fc_a91b_c31e91d55c57 } from '../../custom/widgetResolvers/widget_a3ea9bf4_d82e_49fc_a91b_c31e91d55c57';
import { widget_aeb87860_cf14_44fa_b6e1_4883a4967627 } from '../../custom/widgetResolvers/widget_aeb87860_cf14_44fa_b6e1_4883a4967627';
import { widget_b92f69e9_2e6a_42fe_b640_4660be090e68 } from '../../custom/widgetResolvers/widget_b92f69e9_2e6a_42fe_b640_4660be090e68';
import { widget_bbf06c05_21ab_4f6e_8f5a_b13a18bc722d } from '../../custom/widgetResolvers/widget_bbf06c05_21ab_4f6e_8f5a_b13a18bc722d';
import { widget_c0edd327_8041_4e8a_b108_7bbf9debdb78 } from '../../custom/widgetResolvers/widget_c0edd327_8041_4e8a_b108_7bbf9debdb78';
import { widget_c9cd2b4e_fa6d_4635_b143_2da3173290fb } from '../../custom/widgetResolvers/widget_c9cd2b4e_fa6d_4635_b143_2da3173290fb';
import { widget_d167adac_ecb5_4ece_8fec_212cc0862287 } from '../../custom/widgetResolvers/widget_d167adac_ecb5_4ece_8fec_212cc0862287';
import { widget_d6044bc8_da24_4fbd_9bb8_5b479fcd0ab5 } from '../../custom/widgetResolvers/widget_d6044bc8_da24_4fbd_9bb8_5b479fcd0ab5';
import { widget_e60c1092_8cba_4ba6_8a09_332660264c13 } from '../../custom/widgetResolvers/widget_e60c1092_8cba_4ba6_8a09_332660264c13';
import { widget_ec77cd47_d556_40d5_8225_1a7ae0b5b01d } from '../../custom/widgetResolvers/widget_ec77cd47_d556_40d5_8225_1a7ae0b5b01d';
import { widget_f166f0f6_3747_4fd0_8440_823ec9798a18 } from '../../custom/widgetResolvers/widget_f166f0f6_3747_4fd0_8440_823ec9798a18';
import { widget_f17c2a24_d9d0_4c38_9a38_916463c8740e } from '../../custom/widgetResolvers/widget_f17c2a24_d9d0_4c38_9a38_916463c8740e';
import { widget_f7b47ffb_a67b_4103_a0fc_7833b1a0245d } from '../../custom/widgetResolvers/widget_f7b47ffb_a67b_4103_a0fc_7833b1a0245d';
import { widget_fda8bec5_0887_41ba_9994_e09fae8e4b80 } from '../../custom/widgetResolvers/widget_fda8bec5_0887_41ba_9994_e09fae8e4b80';
import { widget_statistics285e4fe1_61b3_460e_bb72_30f81e33d0ab } from '../../custom/widgetResolvers/widget_statistics285e4fe1_61b3_460e_bb72_30f81e33d0ab';
import { widget_statistics4f2b8ba8_0ab1_4f91_a866_e4551bb3ffd4 } from '../../custom/widgetResolvers/widget_statistics4f2b8ba8_0ab1_4f91_a866_e4551bb3ffd4';
import { widget_statistics558bc4b0_231c_430f_b842_a120f29daaae } from '../../custom/widgetResolvers/widget_statistics558bc4b0_231c_430f_b842_a120f29daaae';
import { widget_statistics55a7e5e4_04fa_434b_95f1_0e5e3418fa89 } from '../../custom/widgetResolvers/widget_statistics55a7e5e4_04fa_434b_95f1_0e5e3418fa89';
import { widget_statistics77e5b90b_11cc_4705_803c_d7252da56097 } from '../../custom/widgetResolvers/widget_statistics77e5b90b_11cc_4705_803c_d7252da56097';
import { widget_statisticsad49c687_e5cc_45f4_a8c1_9991c4067290 } from '../../custom/widgetResolvers/widget_statisticsad49c687_e5cc_45f4_a8c1_9991c4067290';
import { widget_statisticscc7a36ce_f63c_450f_a8e1_fab941aeb426 } from '../../custom/widgetResolvers/widget_statisticscc7a36ce_f63c_450f_a8e1_fab941aeb426';
import { widget_statisticsd1f2a4d4_1452_433a_af71_40a372de0a07 } from '../../custom/widgetResolvers/widget_statisticsd1f2a4d4_1452_433a_af71_40a372de0a07';
import { widget_statisticsd4e99e9e_3b00_446e_9bc1_f05eb12fa2f2 } from '../../custom/widgetResolvers/widget_statisticsd4e99e9e_3b00_446e_9bc1_f05eb12fa2f2';
import { workflow_filters_01b48afe_50fc_4a77_8896_68d90e3bb303 } from '../../custom/widgetResolvers/workflow_filters_01b48afe_50fc_4a77_8896_68d90e3bb303';
import { workflow_filters_29f6e812_74a9_4915_a6e7_9350adac16d2 } from '../../custom/widgetResolvers/workflow_filters_29f6e812_74a9_4915_a6e7_9350adac16d2';
import { workflow_filters_4d33b37d_7334_4690_b591_72e73c1679f5 } from '../../custom/widgetResolvers/workflow_filters_4d33b37d_7334_4690_b591_72e73c1679f5';
import { workflow_filters_6eb72ff3_7af0_479f_8c00_a21245123d6e } from '../../custom/widgetResolvers/workflow_filters_6eb72ff3_7af0_479f_8c00_a21245123d6e';
import { workflow_filters_7ec384bc_2a69_4cd2_baff_8066e14d7419 } from '../../custom/widgetResolvers/workflow_filters_7ec384bc_2a69_4cd2_baff_8066e14d7419';
import { workflow_filters_a72ed5ee_8369_42ea_9637_6304fd8e8f94 } from '../../custom/widgetResolvers/workflow_filters_a72ed5ee_8369_42ea_9637_6304fd8e8f94';
import { workflow_filters_a950f5fc_3458_43c4_ba2d_267471dbedd6 } from '../../custom/widgetResolvers/workflow_filters_a950f5fc_3458_43c4_ba2d_267471dbedd6';

// If you need to access the current user, the token and data sources,
// you can get them from 'this.context'
export class WidgetApi extends RESTDataSource {
  async entity_detail_52e18549_ec43_438d_accd_09e57adba7e9(args: DataListingArgs) {
    return entity_detail_52e18549_ec43_438d_accd_09e57adba7e9(args, this.context);
  }

  async object_listing_095dfbc9_3e93_4b0c_bc62_6b0f2c26a425(args: DataListingArgs) {
    return object_listing_095dfbc9_3e93_4b0c_bc62_6b0f2c26a425(args, this.context);
  }

  async object_listing_0b79bfe3_3751_416d_afdb_56368f570184(args: DataListingArgs) {
    return object_listing_0b79bfe3_3751_416d_afdb_56368f570184(args, this.context);
  }

  async object_listing_0daa8ec2_f8aa_4250_b292_2dd49a32de6f(args: DataListingArgs) {
    return object_listing_0daa8ec2_f8aa_4250_b292_2dd49a32de6f(args, this.context);
  }

  async object_listing_14af3bf8_c910_4b7d_a69f_e5c13bd6f260(args: DataListingArgs) {
    return object_listing_14af3bf8_c910_4b7d_a69f_e5c13bd6f260(args, this.context);
  }

  async object_listing_57ba35fa_13bf_4f15_ad4e_f0d81b62c550(args: DataListingArgs) {
    return object_listing_57ba35fa_13bf_4f15_ad4e_f0d81b62c550(args, this.context);
  }

  async object_listing_6652108c_5a53_4e63_a76f_6784340429ce(args: DataListingArgs) {
    return object_listing_6652108c_5a53_4e63_a76f_6784340429ce(args, this.context);
  }

  async object_listing_765f387f_c23f_47b9_91a2_d7bf11537869(args: DataListingArgs) {
    return object_listing_765f387f_c23f_47b9_91a2_d7bf11537869(args, this.context);
  }

  async object_listing_873cc59c_799b_42f3_a52c_6bbce52b6d2f(args: DataListingArgs) {
    return object_listing_873cc59c_799b_42f3_a52c_6bbce52b6d2f(args, this.context);
  }

  async object_listing_a87fc383_0a3c_48ec_bfce_66a86b481d97(args: DataListingArgs) {
    return object_listing_a87fc383_0a3c_48ec_bfce_66a86b481d97(args, this.context);
  }

  async object_listing_a9c8448c_5ebb_41bf_983d_eadd54b1e8cf(args: DataListingArgs) {
    return object_listing_a9c8448c_5ebb_41bf_983d_eadd54b1e8cf(args, this.context);
  }

  async object_listing_b5efe6df_f7b8_46eb_9c5c_a5f692ed56fb(args: DataListingArgs) {
    return object_listing_b5efe6df_f7b8_46eb_9c5c_a5f692ed56fb(args, this.context);
  }

  async object_listing_d1f03749_9428_43a6_81d2_cfc1366bbab3(args: DataListingArgs) {
    return object_listing_d1f03749_9428_43a6_81d2_cfc1366bbab3(args, this.context);
  }

  async object_listing_d25f057c_1f7e_4fcf_b7c9_55f8de73e3d9(args: DataListingArgs) {
    return object_listing_d25f057c_1f7e_4fcf_b7c9_55f8de73e3d9(args, this.context);
  }

  async object_listing_e915eed6_556f_4343_ba04_004d1e429082(args: DataListingArgs) {
    return object_listing_e915eed6_556f_4343_ba04_004d1e429082(args, this.context);
  }

  async object_listing_f38b8082_6d77_4e8b_81d4_3c7a39611e0e(args: DataListingArgs) {
    return object_listing_f38b8082_6d77_4e8b_81d4_3c7a39611e0e(args, this.context);
  }

  async object_listing_fedfb9da_f1b9_4b8c_bd53_97d7da52671d(args: DataListingArgs) {
    return object_listing_fedfb9da_f1b9_4b8c_bd53_97d7da52671d(args, this.context);
  }

  async widget_04315240_b0ab_4990_8bfe_a10b3d05f98a(args: DataAggregationArgs) {
    return widget_04315240_b0ab_4990_8bfe_a10b3d05f98a(args, this.context);
  }

  async widget_097af69f_2455_4993_b0e5_62cb4f50c50e(args: DataAggregationArgs) {
    return widget_097af69f_2455_4993_b0e5_62cb4f50c50e(args, this.context);
  }

  async widget_1075e94e_ad5d_423d_aa6e_084c1157b7d0(args: DataAggregationArgs) {
    return widget_1075e94e_ad5d_423d_aa6e_084c1157b7d0(args, this.context);
  }

  async widget_175e5113_b3a2_4dd7_904a_db2d69b801f5(args: DataAggregationArgs) {
    return widget_175e5113_b3a2_4dd7_904a_db2d69b801f5(args, this.context);
  }

  async widget_1bf5e483_aee0_4d3a_8d38_8447c96ba57f(args: DataAggregationArgs) {
    return widget_1bf5e483_aee0_4d3a_8d38_8447c96ba57f(args, this.context);
  }

  async widget_1df19de6_78f9_4c7b_91c6_8a1229a768c0(args: DataAggregationArgs) {
    return widget_1df19de6_78f9_4c7b_91c6_8a1229a768c0(args, this.context);
  }

  async widget_22855164_7cc2_4b7d_8772_c90f0d54e8c4(args: DataAggregationArgs) {
    return widget_22855164_7cc2_4b7d_8772_c90f0d54e8c4(args, this.context);
  }

  async widget_28625961_64d7_424c_bf41_9ef87e476c8f(args: DataAggregationArgs) {
    return widget_28625961_64d7_424c_bf41_9ef87e476c8f(args, this.context);
  }

  async widget_28cc8c50_1f73_4589_a015_7e039b786521(args: DataAggregationArgs) {
    return widget_28cc8c50_1f73_4589_a015_7e039b786521(args, this.context);
  }

  async widget_2955b638_00b8_4d4f_8233_41b85184c801(args: DataAggregationArgs) {
    return widget_2955b638_00b8_4d4f_8233_41b85184c801(args, this.context);
  }

  async widget_2ad43285_0ac5_4b6d_a401_f14c63eecf3f(args: DataAggregationArgs) {
    return widget_2ad43285_0ac5_4b6d_a401_f14c63eecf3f(args, this.context);
  }

  async widget_3865655c_a83f_4848_b963_21942f33b3d2(args: DataAggregationArgs) {
    return widget_3865655c_a83f_4848_b963_21942f33b3d2(args, this.context);
  }

  async widget_42a2b0a9_b0d7_405c_91d0_2c48797646ea(args: DataAggregationArgs) {
    return widget_42a2b0a9_b0d7_405c_91d0_2c48797646ea(args, this.context);
  }

  async widget_4680d179_a146_49c2_94e5_1f8d89c36505(args: DataAggregationArgs) {
    return widget_4680d179_a146_49c2_94e5_1f8d89c36505(args, this.context);
  }

  async widget_5081d20a_c065_4439_99e0_9b55549a7e7b(args: DataAggregationArgs) {
    return widget_5081d20a_c065_4439_99e0_9b55549a7e7b(args, this.context);
  }

  async widget_74a505f3_8cd6_49cb_81cd_3c88cfd26711(args: DataAggregationArgs) {
    return widget_74a505f3_8cd6_49cb_81cd_3c88cfd26711(args, this.context);
  }

  async widget_7af0c100_c352_463e_9633_0a0447cec0f7(args: DataAggregationArgs) {
    return widget_7af0c100_c352_463e_9633_0a0447cec0f7(args, this.context);
  }

  async widget_7fb069e3_7b2b_4ee8_81a4_3191f7972acc(args: DataAggregationArgs) {
    return widget_7fb069e3_7b2b_4ee8_81a4_3191f7972acc(args, this.context);
  }

  async widget_838a2038_360a_439d_9b35_a580ab127715(args: DataAggregationArgs) {
    return widget_838a2038_360a_439d_9b35_a580ab127715(args, this.context);
  }

  async widget_8f597d1f_2478_4ba2_b43c_2c230172ca99(args: DataAggregationArgs) {
    return widget_8f597d1f_2478_4ba2_b43c_2c230172ca99(args, this.context);
  }

  async widget_9a53f00f_2d78_4680_8066_4833234fede9(args: DataAggregationArgs) {
    return widget_9a53f00f_2d78_4680_8066_4833234fede9(args, this.context);
  }

  async widget_9b59bb7d_f94c_4a2c_81d6_ce38ad6c356d(args: DataAggregationArgs) {
    return widget_9b59bb7d_f94c_4a2c_81d6_ce38ad6c356d(args, this.context);
  }

  async widget_a3ea9bf4_d82e_49fc_a91b_c31e91d55c57(args: DataAggregationArgs) {
    return widget_a3ea9bf4_d82e_49fc_a91b_c31e91d55c57(args, this.context);
  }

  async widget_aeb87860_cf14_44fa_b6e1_4883a4967627(args: DataAggregationArgs) {
    return widget_aeb87860_cf14_44fa_b6e1_4883a4967627(args, this.context);
  }

  async widget_b92f69e9_2e6a_42fe_b640_4660be090e68(args: DataAggregationArgs) {
    return widget_b92f69e9_2e6a_42fe_b640_4660be090e68(args, this.context);
  }

  async widget_bbf06c05_21ab_4f6e_8f5a_b13a18bc722d(args: DataAggregationArgs) {
    return widget_bbf06c05_21ab_4f6e_8f5a_b13a18bc722d(args, this.context);
  }

  async widget_c0edd327_8041_4e8a_b108_7bbf9debdb78(args: DataAggregationArgs) {
    return widget_c0edd327_8041_4e8a_b108_7bbf9debdb78(args, this.context);
  }

  async widget_c9cd2b4e_fa6d_4635_b143_2da3173290fb(args: DataAggregationArgs) {
    return widget_c9cd2b4e_fa6d_4635_b143_2da3173290fb(args, this.context);
  }

  async widget_d167adac_ecb5_4ece_8fec_212cc0862287(args: DataAggregationArgs) {
    return widget_d167adac_ecb5_4ece_8fec_212cc0862287(args, this.context);
  }

  async widget_d6044bc8_da24_4fbd_9bb8_5b479fcd0ab5(args: DataAggregationArgs) {
    return widget_d6044bc8_da24_4fbd_9bb8_5b479fcd0ab5(args, this.context);
  }

  async widget_e60c1092_8cba_4ba6_8a09_332660264c13(args: DataAggregationArgs) {
    return widget_e60c1092_8cba_4ba6_8a09_332660264c13(args, this.context);
  }

  async widget_ec77cd47_d556_40d5_8225_1a7ae0b5b01d(args: DataAggregationArgs) {
    return widget_ec77cd47_d556_40d5_8225_1a7ae0b5b01d(args, this.context);
  }

  async widget_f166f0f6_3747_4fd0_8440_823ec9798a18(args: DataAggregationArgs) {
    return widget_f166f0f6_3747_4fd0_8440_823ec9798a18(args, this.context);
  }

  async widget_f17c2a24_d9d0_4c38_9a38_916463c8740e(args: DataAggregationArgs) {
    return widget_f17c2a24_d9d0_4c38_9a38_916463c8740e(args, this.context);
  }

  async widget_f7b47ffb_a67b_4103_a0fc_7833b1a0245d(args: DataAggregationArgs) {
    return widget_f7b47ffb_a67b_4103_a0fc_7833b1a0245d(args, this.context);
  }

  async widget_fda8bec5_0887_41ba_9994_e09fae8e4b80(args: DataAggregationArgs) {
    return widget_fda8bec5_0887_41ba_9994_e09fae8e4b80(args, this.context);
  }

  async widget_statistics285e4fe1_61b3_460e_bb72_30f81e33d0ab(args: MultiTransFormationArgs) {
    return widget_statistics285e4fe1_61b3_460e_bb72_30f81e33d0ab(args, this.context);
  }

  async widget_statistics4f2b8ba8_0ab1_4f91_a866_e4551bb3ffd4(args: MultiTransFormationArgs) {
    return widget_statistics4f2b8ba8_0ab1_4f91_a866_e4551bb3ffd4(args, this.context);
  }

  async widget_statistics558bc4b0_231c_430f_b842_a120f29daaae(args: MultiTransFormationArgs) {
    return widget_statistics558bc4b0_231c_430f_b842_a120f29daaae(args, this.context);
  }

  async widget_statistics55a7e5e4_04fa_434b_95f1_0e5e3418fa89(args: MultiTransFormationArgs) {
    return widget_statistics55a7e5e4_04fa_434b_95f1_0e5e3418fa89(args, this.context);
  }

  async widget_statistics77e5b90b_11cc_4705_803c_d7252da56097(args: MultiTransFormationArgs) {
    return widget_statistics77e5b90b_11cc_4705_803c_d7252da56097(args, this.context);
  }

  async widget_statisticsad49c687_e5cc_45f4_a8c1_9991c4067290(args: MultiTransFormationArgs) {
    return widget_statisticsad49c687_e5cc_45f4_a8c1_9991c4067290(args, this.context);
  }

  async widget_statisticscc7a36ce_f63c_450f_a8e1_fab941aeb426(args: MultiTransFormationArgs) {
    return widget_statisticscc7a36ce_f63c_450f_a8e1_fab941aeb426(args, this.context);
  }

  async widget_statisticsd1f2a4d4_1452_433a_af71_40a372de0a07(args: MultiTransFormationArgs) {
    return widget_statisticsd1f2a4d4_1452_433a_af71_40a372de0a07(args, this.context);
  }

  async widget_statisticsd4e99e9e_3b00_446e_9bc1_f05eb12fa2f2(args: MultiTransFormationArgs) {
    return widget_statisticsd4e99e9e_3b00_446e_9bc1_f05eb12fa2f2(args, this.context);
  }

  async workflow_filters_01b48afe_50fc_4a77_8896_68d90e3bb303(args: never) {
    return workflow_filters_01b48afe_50fc_4a77_8896_68d90e3bb303(args, this.context);
  }

  async workflow_filters_29f6e812_74a9_4915_a6e7_9350adac16d2(args: never) {
    return workflow_filters_29f6e812_74a9_4915_a6e7_9350adac16d2(args, this.context);
  }

  async workflow_filters_4d33b37d_7334_4690_b591_72e73c1679f5(args: never) {
    return workflow_filters_4d33b37d_7334_4690_b591_72e73c1679f5(args, this.context);
  }

  async workflow_filters_6eb72ff3_7af0_479f_8c00_a21245123d6e(args: never) {
    return workflow_filters_6eb72ff3_7af0_479f_8c00_a21245123d6e(args, this.context);
  }

  async workflow_filters_7ec384bc_2a69_4cd2_baff_8066e14d7419(args: never) {
    return workflow_filters_7ec384bc_2a69_4cd2_baff_8066e14d7419(args, this.context);
  }

  async workflow_filters_a72ed5ee_8369_42ea_9637_6304fd8e8f94(args: never) {
    return workflow_filters_a72ed5ee_8369_42ea_9637_6304fd8e8f94(args, this.context);
  }

  async workflow_filters_a950f5fc_3458_43c4_ba2d_267471dbedd6(args: never) {
    return workflow_filters_a950f5fc_3458_43c4_ba2d_267471dbedd6(args, this.context);
  }
}
