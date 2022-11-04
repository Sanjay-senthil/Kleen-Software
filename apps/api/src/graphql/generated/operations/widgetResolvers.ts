/* eslint @typescript-eslint/camelcase: 0, @typescript-eslint/no-unused-vars: 0, max-lines: 0 */
import { DataListingArgs, DataAggregationArgs, MultiTransFormationArgs } from '../../../types';
import { IResolvers } from 'apollo-server-express';

export const widgetResolvers: IResolvers = {
  Query: {
    entity_detail_52e18549_ec43_438d_accd_09e57adba7e9: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.entity_detail_52e18549_ec43_438d_accd_09e57adba7e9(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.entity_detail_52e18549_ec43_438d_accd_09e57adba7e9(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_095dfbc9_3e93_4b0c_bc62_6b0f2c26a425: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_095dfbc9_3e93_4b0c_bc62_6b0f2c26a425(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_095dfbc9_3e93_4b0c_bc62_6b0f2c26a425(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_0b79bfe3_3751_416d_afdb_56368f570184: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_0b79bfe3_3751_416d_afdb_56368f570184(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_0b79bfe3_3751_416d_afdb_56368f570184(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_0daa8ec2_f8aa_4250_b292_2dd49a32de6f: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_0daa8ec2_f8aa_4250_b292_2dd49a32de6f(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_0daa8ec2_f8aa_4250_b292_2dd49a32de6f(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_14af3bf8_c910_4b7d_a69f_e5c13bd6f260: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_14af3bf8_c910_4b7d_a69f_e5c13bd6f260(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_14af3bf8_c910_4b7d_a69f_e5c13bd6f260(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_57ba35fa_13bf_4f15_ad4e_f0d81b62c550: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_57ba35fa_13bf_4f15_ad4e_f0d81b62c550(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_57ba35fa_13bf_4f15_ad4e_f0d81b62c550(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_6652108c_5a53_4e63_a76f_6784340429ce: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_6652108c_5a53_4e63_a76f_6784340429ce(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_6652108c_5a53_4e63_a76f_6784340429ce(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_765f387f_c23f_47b9_91a2_d7bf11537869: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_765f387f_c23f_47b9_91a2_d7bf11537869(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_765f387f_c23f_47b9_91a2_d7bf11537869(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_873cc59c_799b_42f3_a52c_6bbce52b6d2f: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_873cc59c_799b_42f3_a52c_6bbce52b6d2f(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_873cc59c_799b_42f3_a52c_6bbce52b6d2f(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_a87fc383_0a3c_48ec_bfce_66a86b481d97: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_a87fc383_0a3c_48ec_bfce_66a86b481d97(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_a87fc383_0a3c_48ec_bfce_66a86b481d97(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_a9c8448c_5ebb_41bf_983d_eadd54b1e8cf: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_a9c8448c_5ebb_41bf_983d_eadd54b1e8cf(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_a9c8448c_5ebb_41bf_983d_eadd54b1e8cf(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_b5efe6df_f7b8_46eb_9c5c_a5f692ed56fb: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_b5efe6df_f7b8_46eb_9c5c_a5f692ed56fb(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_b5efe6df_f7b8_46eb_9c5c_a5f692ed56fb(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_d1f03749_9428_43a6_81d2_cfc1366bbab3: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_d1f03749_9428_43a6_81d2_cfc1366bbab3(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_d1f03749_9428_43a6_81d2_cfc1366bbab3(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_d25f057c_1f7e_4fcf_b7c9_55f8de73e3d9: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_d25f057c_1f7e_4fcf_b7c9_55f8de73e3d9(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_d25f057c_1f7e_4fcf_b7c9_55f8de73e3d9(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_e915eed6_556f_4343_ba04_004d1e429082: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_e915eed6_556f_4343_ba04_004d1e429082(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_e915eed6_556f_4343_ba04_004d1e429082(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_f38b8082_6d77_4e8b_81d4_3c7a39611e0e: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_f38b8082_6d77_4e8b_81d4_3c7a39611e0e(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_f38b8082_6d77_4e8b_81d4_3c7a39611e0e(args.input, {
            ...rest,
          })
        : result;
    },

    object_listing_fedfb9da_f1b9_4b8c_bd53_97d7da52671d: async (
      _parent: any,
      args: { input: DataListingArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.object_listing_fedfb9da_f1b9_4b8c_bd53_97d7da52671d(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.object_listing_fedfb9da_f1b9_4b8c_bd53_97d7da52671d(args.input, {
            ...rest,
          })
        : result;
    },

    widget_04315240_b0ab_4990_8bfe_a10b3d05f98a: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_04315240_b0ab_4990_8bfe_a10b3d05f98a(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_04315240_b0ab_4990_8bfe_a10b3d05f98a(args.input, { ...rest })
        : result;
    },

    widget_097af69f_2455_4993_b0e5_62cb4f50c50e: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_097af69f_2455_4993_b0e5_62cb4f50c50e(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_097af69f_2455_4993_b0e5_62cb4f50c50e(args.input, { ...rest })
        : result;
    },

    widget_1075e94e_ad5d_423d_aa6e_084c1157b7d0: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_1075e94e_ad5d_423d_aa6e_084c1157b7d0(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_1075e94e_ad5d_423d_aa6e_084c1157b7d0(args.input, { ...rest })
        : result;
    },

    widget_175e5113_b3a2_4dd7_904a_db2d69b801f5: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_175e5113_b3a2_4dd7_904a_db2d69b801f5(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_175e5113_b3a2_4dd7_904a_db2d69b801f5(args.input, { ...rest })
        : result;
    },

    widget_1bf5e483_aee0_4d3a_8d38_8447c96ba57f: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_1bf5e483_aee0_4d3a_8d38_8447c96ba57f(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_1bf5e483_aee0_4d3a_8d38_8447c96ba57f(args.input, { ...rest })
        : result;
    },

    widget_1df19de6_78f9_4c7b_91c6_8a1229a768c0: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_1df19de6_78f9_4c7b_91c6_8a1229a768c0(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_1df19de6_78f9_4c7b_91c6_8a1229a768c0(args.input, { ...rest })
        : result;
    },

    widget_22855164_7cc2_4b7d_8772_c90f0d54e8c4: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_22855164_7cc2_4b7d_8772_c90f0d54e8c4(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_22855164_7cc2_4b7d_8772_c90f0d54e8c4(args.input, { ...rest })
        : result;
    },

    widget_28625961_64d7_424c_bf41_9ef87e476c8f: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_28625961_64d7_424c_bf41_9ef87e476c8f(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_28625961_64d7_424c_bf41_9ef87e476c8f(args.input, { ...rest })
        : result;
    },

    widget_28cc8c50_1f73_4589_a015_7e039b786521: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_28cc8c50_1f73_4589_a015_7e039b786521(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_28cc8c50_1f73_4589_a015_7e039b786521(args.input, { ...rest })
        : result;
    },

    widget_2955b638_00b8_4d4f_8233_41b85184c801: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_2955b638_00b8_4d4f_8233_41b85184c801(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_2955b638_00b8_4d4f_8233_41b85184c801(args.input, { ...rest })
        : result;
    },

    widget_2ad43285_0ac5_4b6d_a401_f14c63eecf3f: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_2ad43285_0ac5_4b6d_a401_f14c63eecf3f(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_2ad43285_0ac5_4b6d_a401_f14c63eecf3f(args.input, { ...rest })
        : result;
    },

    widget_3865655c_a83f_4848_b963_21942f33b3d2: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_3865655c_a83f_4848_b963_21942f33b3d2(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_3865655c_a83f_4848_b963_21942f33b3d2(args.input, { ...rest })
        : result;
    },

    widget_42a2b0a9_b0d7_405c_91d0_2c48797646ea: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_42a2b0a9_b0d7_405c_91d0_2c48797646ea(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_42a2b0a9_b0d7_405c_91d0_2c48797646ea(args.input, { ...rest })
        : result;
    },

    widget_4680d179_a146_49c2_94e5_1f8d89c36505: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_4680d179_a146_49c2_94e5_1f8d89c36505(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_4680d179_a146_49c2_94e5_1f8d89c36505(args.input, { ...rest })
        : result;
    },

    widget_5081d20a_c065_4439_99e0_9b55549a7e7b: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_5081d20a_c065_4439_99e0_9b55549a7e7b(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_5081d20a_c065_4439_99e0_9b55549a7e7b(args.input, { ...rest })
        : result;
    },

    widget_74a505f3_8cd6_49cb_81cd_3c88cfd26711: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_74a505f3_8cd6_49cb_81cd_3c88cfd26711(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_74a505f3_8cd6_49cb_81cd_3c88cfd26711(args.input, { ...rest })
        : result;
    },

    widget_7af0c100_c352_463e_9633_0a0447cec0f7: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_7af0c100_c352_463e_9633_0a0447cec0f7(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_7af0c100_c352_463e_9633_0a0447cec0f7(args.input, { ...rest })
        : result;
    },

    widget_7fb069e3_7b2b_4ee8_81a4_3191f7972acc: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_7fb069e3_7b2b_4ee8_81a4_3191f7972acc(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_7fb069e3_7b2b_4ee8_81a4_3191f7972acc(args.input, { ...rest })
        : result;
    },

    widget_838a2038_360a_439d_9b35_a580ab127715: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_838a2038_360a_439d_9b35_a580ab127715(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_838a2038_360a_439d_9b35_a580ab127715(args.input, { ...rest })
        : result;
    },

    widget_8f597d1f_2478_4ba2_b43c_2c230172ca99: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_8f597d1f_2478_4ba2_b43c_2c230172ca99(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_8f597d1f_2478_4ba2_b43c_2c230172ca99(args.input, { ...rest })
        : result;
    },

    widget_9a53f00f_2d78_4680_8066_4833234fede9: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_9a53f00f_2d78_4680_8066_4833234fede9(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_9a53f00f_2d78_4680_8066_4833234fede9(args.input, { ...rest })
        : result;
    },

    widget_9b59bb7d_f94c_4a2c_81d6_ce38ad6c356d: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_9b59bb7d_f94c_4a2c_81d6_ce38ad6c356d(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_9b59bb7d_f94c_4a2c_81d6_ce38ad6c356d(args.input, { ...rest })
        : result;
    },

    widget_a3ea9bf4_d82e_49fc_a91b_c31e91d55c57: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_a3ea9bf4_d82e_49fc_a91b_c31e91d55c57(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_a3ea9bf4_d82e_49fc_a91b_c31e91d55c57(args.input, { ...rest })
        : result;
    },

    widget_aeb87860_cf14_44fa_b6e1_4883a4967627: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_aeb87860_cf14_44fa_b6e1_4883a4967627(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_aeb87860_cf14_44fa_b6e1_4883a4967627(args.input, { ...rest })
        : result;
    },

    widget_b92f69e9_2e6a_42fe_b640_4660be090e68: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_b92f69e9_2e6a_42fe_b640_4660be090e68(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_b92f69e9_2e6a_42fe_b640_4660be090e68(args.input, { ...rest })
        : result;
    },

    widget_bbf06c05_21ab_4f6e_8f5a_b13a18bc722d: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_bbf06c05_21ab_4f6e_8f5a_b13a18bc722d(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_bbf06c05_21ab_4f6e_8f5a_b13a18bc722d(args.input, { ...rest })
        : result;
    },

    widget_c0edd327_8041_4e8a_b108_7bbf9debdb78: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_c0edd327_8041_4e8a_b108_7bbf9debdb78(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_c0edd327_8041_4e8a_b108_7bbf9debdb78(args.input, { ...rest })
        : result;
    },

    widget_c9cd2b4e_fa6d_4635_b143_2da3173290fb: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_c9cd2b4e_fa6d_4635_b143_2da3173290fb(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_c9cd2b4e_fa6d_4635_b143_2da3173290fb(args.input, { ...rest })
        : result;
    },

    widget_d167adac_ecb5_4ece_8fec_212cc0862287: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_d167adac_ecb5_4ece_8fec_212cc0862287(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_d167adac_ecb5_4ece_8fec_212cc0862287(args.input, { ...rest })
        : result;
    },

    widget_d6044bc8_da24_4fbd_9bb8_5b479fcd0ab5: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_d6044bc8_da24_4fbd_9bb8_5b479fcd0ab5(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_d6044bc8_da24_4fbd_9bb8_5b479fcd0ab5(args.input, { ...rest })
        : result;
    },

    widget_e60c1092_8cba_4ba6_8a09_332660264c13: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_e60c1092_8cba_4ba6_8a09_332660264c13(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_e60c1092_8cba_4ba6_8a09_332660264c13(args.input, { ...rest })
        : result;
    },

    widget_ec77cd47_d556_40d5_8225_1a7ae0b5b01d: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_ec77cd47_d556_40d5_8225_1a7ae0b5b01d(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_ec77cd47_d556_40d5_8225_1a7ae0b5b01d(args.input, { ...rest })
        : result;
    },

    widget_f166f0f6_3747_4fd0_8440_823ec9798a18: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_f166f0f6_3747_4fd0_8440_823ec9798a18(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_f166f0f6_3747_4fd0_8440_823ec9798a18(args.input, { ...rest })
        : result;
    },

    widget_f17c2a24_d9d0_4c38_9a38_916463c8740e: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_f17c2a24_d9d0_4c38_9a38_916463c8740e(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_f17c2a24_d9d0_4c38_9a38_916463c8740e(args.input, { ...rest })
        : result;
    },

    widget_f7b47ffb_a67b_4103_a0fc_7833b1a0245d: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_f7b47ffb_a67b_4103_a0fc_7833b1a0245d(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_f7b47ffb_a67b_4103_a0fc_7833b1a0245d(args.input, { ...rest })
        : result;
    },

    widget_fda8bec5_0887_41ba_9994_e09fae8e4b80: async (
      _parent: any,
      args: { input: DataAggregationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_fda8bec5_0887_41ba_9994_e09fae8e4b80(args.input);

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_fda8bec5_0887_41ba_9994_e09fae8e4b80(args.input, { ...rest })
        : result;
    },

    widget_statistics285e4fe1_61b3_460e_bb72_30f81e33d0ab: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statistics285e4fe1_61b3_460e_bb72_30f81e33d0ab(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statistics285e4fe1_61b3_460e_bb72_30f81e33d0ab(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statistics4f2b8ba8_0ab1_4f91_a866_e4551bb3ffd4: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statistics4f2b8ba8_0ab1_4f91_a866_e4551bb3ffd4(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statistics4f2b8ba8_0ab1_4f91_a866_e4551bb3ffd4(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statistics558bc4b0_231c_430f_b842_a120f29daaae: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statistics558bc4b0_231c_430f_b842_a120f29daaae(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statistics558bc4b0_231c_430f_b842_a120f29daaae(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statistics55a7e5e4_04fa_434b_95f1_0e5e3418fa89: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statistics55a7e5e4_04fa_434b_95f1_0e5e3418fa89(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statistics55a7e5e4_04fa_434b_95f1_0e5e3418fa89(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statistics77e5b90b_11cc_4705_803c_d7252da56097: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statistics77e5b90b_11cc_4705_803c_d7252da56097(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statistics77e5b90b_11cc_4705_803c_d7252da56097(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statisticsad49c687_e5cc_45f4_a8c1_9991c4067290: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statisticsad49c687_e5cc_45f4_a8c1_9991c4067290(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statisticsad49c687_e5cc_45f4_a8c1_9991c4067290(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statisticscc7a36ce_f63c_450f_a8e1_fab941aeb426: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statisticscc7a36ce_f63c_450f_a8e1_fab941aeb426(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statisticscc7a36ce_f63c_450f_a8e1_fab941aeb426(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statisticsd1f2a4d4_1452_433a_af71_40a372de0a07: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statisticsd1f2a4d4_1452_433a_af71_40a372de0a07(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statisticsd1f2a4d4_1452_433a_af71_40a372de0a07(args.input, {
            ...rest,
          })
        : result;
    },

    widget_statisticsd4e99e9e_3b00_446e_9bc1_f05eb12fa2f2: async (
      _parent: any,
      args: { input: MultiTransFormationArgs },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.widget_statisticsd4e99e9e_3b00_446e_9bc1_f05eb12fa2f2(
        args.input,
      );

      return result === 'not implemented'
        ? dataSources.widgetFakeApi.widget_statisticsd4e99e9e_3b00_446e_9bc1_f05eb12fa2f2(args.input, {
            ...rest,
          })
        : result;
    },

    workflow_filters_01b48afe_50fc_4a77_8896_68d90e3bb303: async (
      _parent: any,
      args: { input: never },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.workflow_filters_01b48afe_50fc_4a77_8896_68d90e3bb303();

      return result;
    },

    workflow_filters_29f6e812_74a9_4915_a6e7_9350adac16d2: async (
      _parent: any,
      args: { input: never },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.workflow_filters_29f6e812_74a9_4915_a6e7_9350adac16d2();

      return result;
    },

    workflow_filters_4d33b37d_7334_4690_b591_72e73c1679f5: async (
      _parent: any,
      args: { input: never },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.workflow_filters_4d33b37d_7334_4690_b591_72e73c1679f5();

      return result;
    },

    workflow_filters_6eb72ff3_7af0_479f_8c00_a21245123d6e: async (
      _parent: any,
      args: { input: never },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.workflow_filters_6eb72ff3_7af0_479f_8c00_a21245123d6e();

      return result;
    },

    workflow_filters_7ec384bc_2a69_4cd2_baff_8066e14d7419: async (
      _parent: any,
      args: { input: never },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.workflow_filters_7ec384bc_2a69_4cd2_baff_8066e14d7419();

      return result;
    },

    workflow_filters_a72ed5ee_8369_42ea_9637_6304fd8e8f94: async (
      _parent: any,
      args: { input: never },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.workflow_filters_a72ed5ee_8369_42ea_9637_6304fd8e8f94();

      return result;
    },

    workflow_filters_a950f5fc_3458_43c4_ba2d_267471dbedd6: async (
      _parent: any,
      args: { input: never },
      { dataSources, ...rest },
    ) => {
      const result = await dataSources.widgetApi.workflow_filters_a950f5fc_3458_43c4_ba2d_267471dbedd6();

      return result;
    },
  },
};
