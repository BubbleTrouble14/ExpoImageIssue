/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Button,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';

import {FlashList} from '@shopify/flash-list';
import {Image} from 'expo-image';
import {
  Collection,
  CollectionNFT,
  CollectionNFTRequestBody,
  CollectionNFTResponse,
} from './src/types/Collections';

import {fetchData} from './src/services';

type RowItemProps = {
  item: Collection;
  showDesc?: boolean;
  size?: number;
  width?: number;
  numColumns: number;
};

function RowItem({item, size}: RowItemProps): JSX.Element {
  return (
    <View
      style={{
        marginHorizontal: 4,
        // height: size,
        // width: size - 2,
        backgroundColor: 'red',
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          borderColor: '#CACACA',
          borderWidth: 0.5,
          borderRadius: 8,
        }}>
        <View
          style={{
            borderRadius: 8,
            borderColor: 'grey',
            overflow: 'hidden',
          }}>
          <Image
            // contentFit="scale-down"
            cachePolicy="none"
            recyclingKey={item + ''}
            style={{
              width: '100%',
              aspectRatio: 1,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
            // source={{
            //   cacheKey: item + '',
            //   uri: 'https://assets.mainnet.mintgarden.io/thumbnails/424d73b746f740fe06ee6346e985ee7a3ccc36a1703e40d7103515f9f28b11e9_512.png',
            // }}
            source={{
              uri: xData[item]?.uri,
            }}
          />
        </View>
      </View>
    </View>
  );
}

const nums = [1, 2, 4, 8];
const testData = Array.from(Array(1000).keys());

function App(): JSX.Element {
  const {width} = useWindowDimensions();
  // const [data, setData] = useState<Collection[]>([]);
  const [data, setData] = useState<CollectionNFT[]>([]);

  const [numColumns, setNumColumns] = useState<number>(3);
  const [nextPage, setNextPage] = useState<string | undefined>(undefined);

  const renderItem: ListRenderItem<Collection> = ({item}) => (
    <RowItem item={item} size={width / nums[numColumns]} />
  );

  return (
    <SafeAreaView style={styles.background}>
      <Button
        title="press"
        onPress={() => {
          // Image.clearMemoryCache().then(val => {
          //   console.log(val);
          // });
          setNumColumns(prev => {
            if (prev === 3) {
              return 0;
            }
            return ++prev;
          });
        }}
      />
      <FlashList
        numColumns={nums[numColumns]}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{margin: 4}} />}
        data={testData}
        renderItem={renderItem}
        estimatedItemSize={width / nums[numColumns]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  background: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
});

export default App;

const xData = [
  {
    id: '46832c6833f9b095bb8d7cdc3a1491a92615638f911377fc72e3d31725aeb659',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/00132a912ef737a065c6e0167f641ba874c4ad7871a2edbdafb073886b436d48_512.png',
  },
  {
    id: '8de3a87adef34c51f65dfe0a49848b7a170f64cdbeb86f27b3215c930395f489',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/f9f00b0a778c50fe34fbd8663c997ce00ad7d9a8acc29ca1675e91f16b92792e_512.png',
  },
  {
    id: 'e0929dff1332b4734f6bd7e352839a11a794a6ae1cecc442ab21380f24f7797b',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/42b161ade86f14701c5b7064311eacbf7a4c3bffdea157fcf95f3b338e323443_512.png',
  },
  {
    id: '74acb6e1f571ce7529ca94b3aaf1803ac806b598eaff6af0aa4029ebeeb9a207',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/c72960d3cb76919e4a10e0c6f23fdd49f0ad37eadf2eb3ba655d2a7a01657c68_512.png',
  },
  {
    id: 'a7cfdce671c8c7f7b63d97d171409379f7ec0e0b9a4fea8b13b9e9f946b10a17',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/27599b0426c9843008e9dfa55c063da32b23089a3c66e19dbd764edf318e4827_512.png',
  },
  {
    id: '71497c8a67adef0f5428c5d1731547287a4f860a67ac25f49012baf703cefac3',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/29e44873c532a161d7251be08dce871bec94b767eb944441d5be8d349c40e777_512.png',
  },
  {
    id: 'bda147795c0e7485560e4fdad0007aba575c570f683185afa7185a45b2144b5e',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/2927619ee2b226bfe0737b9df8d604e0af887f7bf982678f9e26cef3f005d010_512.png',
  },
  {
    id: 'f5aabec45bd9dda065524954feb304fb62a534ee6d69c1689f57cf0a54587d10',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/f727406e37379695c3b8cb4b1b6b0679216e12da3044f313d33c24d3d47eb57c_512.png',
  },
  {
    id: '2af193b5d2137e05dc97847b75e67e76bd53566f4e888bdc2ef0e914ca1f2d50',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/a28e224b47924c91f48b41cb3dddc57abb7ce755de74c92d5f391ad6891c414c_512.png',
  },
  {
    id: '2ffd34323f9514a88b6a81035f362b9654539cd55eee8cc216fc3d1c03c604ec',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/1f490d67d08a5f8fb76e024cd2dbf08bbfba7ec63a0d65f276c4c3beec156e4d_512.png',
  },
  {
    id: '99066e719d999b01dcffe06d0a288123180545f9f4e790848d92b272d76ef703',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/7a27c8cb3ca059324c395a5a2643420ec6a5f7e185cc5459ff611aeb8f6b7f8d_512.png',
  },
  {
    id: '78b2954309d909aab9774e67bff9cc0379899c9b8dae7177270ec053508f5af1',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/3071cdb9d5e2231ef564c4de8db56dbf56048e4d3ca39380f154e11bac8cf01f_512.png',
  },
  {
    id: '3dbb5bbbcfc7031f434534fa677dfc54e530282ef7b3710d90cb306fbfe86093',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/d6223a38a23e9e50590cd28bf2228c04a3d7aa0e759b67ec37035abdd1cb152a_512.png',
  },
  {
    id: '14efc35606f7f7765b28d4277554ec8271d8dcf935fb3883e79740c31f0b88db',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/29beab1cdf1d7bf97484237b9cb2011419ffc51b4940e2dfbb8ebffec376b9c5_512.png',
  },
  {
    id: '62b8886440e7bb8df3c3fdbb57b570f480adb6732ec610881a8d92199d206259',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/bd44bf0116c5272fec451d6aa5e524ccb2fec38457c48799c38d1950a05342d3_512.png',
  },
  {
    id: 'a41b682b770b9c3f15e8b2b87ef014feb697eb81547ada4657fea917518eeee4',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/b4f5ecb8a9388c8973bcdc2b4e72864a6a3559c6409740e81cf6f560bfc55846_512.png',
  },
  {
    id: 'dcb1e09d7a3053b31cd512a161d5d8f54deaac4d7d16d0119dfd597b122d3269',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/06100af73008fe40a923790222f9bd9f815ba6111d54092a75dc56a926e8a413_512.png',
  },
  {
    id: '435fcf2e7230a950c825cb5cebc298694b399971b27cd4b335217d75331bb29d',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/ebe99cb1c4911c4117598a5992edba4f15893363e77a5cecc0ddc931e3d0ade5_512.png',
  },
  {
    id: '04808f5f1fac4d57a3b711e025ea15391b16610a8b8e545978567363ec7aef0e',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/53d79df73b620c9f1ed7900f4c7104e8e53477e7e2722c52b1262673e12e279c_512.png',
  },
  {
    id: '4abbb2b0655d8e07f18c52e7dc88df7142f939f250278759dafe02a2bade52a2',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/f9c7ab85f3f932c358b1b679437fb21f4580a0a7a3461b032d63a39ba1687840_512.png',
  },
  {
    id: '54e8c02ec8a359d25ecbc35cd6ea1d868aec6ab9841608ed0916cd2848eead7d',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/f3b57022ac20ff8d5d3b50affe4de1d94c39ba2a8f887857aa0f4532751a954f_512.png',
  },
  {
    id: '77b13bd2291654220fa2b7cead25c6f9effc7a4ea40b69614e54c989db2c3ebb',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/0ea5a5e5e8d2fd47715b5a65771a7f04b946cbd72c767eeefdc7d163fc51ec28_512.png',
  },
  {
    id: '04ac600d5c78b72a635a760d1a5c6ad11e157dcc1484772aff2e61ad02c937c3',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/397ff89d8db82c3d46e7c66bbbd5832c5ccbfeb9681bc75330fde48d8baefffd_512.png',
  },
  {
    id: '59daafa66eb96527dd05cc09f69ec54b2b2e093059ea1124afd9ebe733dd8aad',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/c229d7dec9e07122bd4148a086524601210c55e72b2526c68349822ccf5210af_512.png',
  },
  {
    id: '7b036369dfe395b848b4ac952a391f8495a5cefa5b46d011ecd81a81cf2394d9',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/a292fdc7824c53b2efd5855baf63c437fdd4fe96615cc1f6c747ff7ded6c5ba5_512.png',
  },
  {
    id: '37fa49082be650fbbb7815ee1e0c7dc112eb0dd74b958137e50edb3ff97b25b9',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/9677ffe4ac08cf5fb3ed7939eb3f37b4807aac68cc8252fe8c6ab04fbbf9b5df_512.png',
  },
  {
    id: '89f1129167d75f6d2ae6b82f26782bfe4ed07dc8684a987b4bb2bc8229ef0f57',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/d05a61c8a67f1fd5eb7132c49349a0eba4abef8aaa131765c16fd2ae9659ff40_512.png',
  },
  {
    id: '5800cec8be8bf1fa277732a5b6fa03ffa00820d81c7973ae21b8491de1ddc58a',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/64d939d39691965599b94ac054fe8675672bfc9ca4431d730935b8736f3299d6_512.png',
  },
  {
    id: '295d2aca979266f6d2dc2bc8a26c22a200ddab6ac3351024a4dc2fa2bd23cb70',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/3c24218c60bc30ae99bfbfb6eac24162691634b17ac9316e12ff78de1d038fe0_512.png',
  },
  {
    id: '75047bf39bfadbd1585a64c51b5d0b345a956e639262da0d8879b61b46ce5acc',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/c736b7c8e0904500d72d93efcabbce08cd5870a04d54dc722acaa13b5ea47803_512.png',
  },
  {
    id: 'c8f6c28e6dd4bdcec9319e53bd6b3f70ce2577b9b168e6db6f5f9aa2ed16a07f',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/f5e7f7a2d45bd4bb0faae0a76896a4820034f6f18882b47a5ada67605ae29318_512.png',
  },
  {
    id: 'ffd0216f2cdcf5f942bba8bb75c3f8c5160abd9f0a35a9cf052902b3c0b9c3dd',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/fccfecd820790582bd8be59b219d96c610e51413ebd7a1bcd147939eea244bf0_512.png',
  },
  {
    id: '6779de82add53d049103d7969ed7c3b227e31ab546f563913df49c4403d7f87f',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/32af39474968ab414515140abc7c837c6d5a8cd44725a309846b4b7fcb9d7233_512.png',
  },
  {
    id: '943845652c7254fc643b5e33f3755027117db6513de8a21f5d2a7484fc07dc47',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/0589d9891e84f6f865878fe7c893fbd4fee6cb59375dce08ac223258b2f9e52d_512.png',
  },
  {
    id: '9da5cc5ffc07405ea7e4380c11f20a04ffc1f694c82dd324565ce45aa0cb08c5',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/eaa46b4a928d3cf1087ebbd81f1c7bcf4a840ecee8a7fa9b4ae9fb3612a5573a_512.png',
  },
  {
    id: 'c1304c5b93b66d4be30a840b43697b97fe0056b49367f05b13f796c7f249e212',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/aee65e3472705d3e77229fd4dc9f542b8b1ac4224cde8de343aa410bc58df62e_512.png',
  },
  {
    id: '1c5610e9f898570f658e27543ca5a03730f758bb3546a1aaeacd4c6328263dfd',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/e7aff3be7ae0d81faf24d130a502172a3ed2e1db797c573a8bd88ef87e875571_512.png',
  },
  {
    id: '3745ab8162aad8b371e277215f3d0ad96353c099199883c229ef7417cabc394d',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/424d73b746f740fe06ee6346e985ee7a3ccc36a1703e40d7103515f9f28b11e9_512.png',
  },
  {
    id: 'edfd4d973d9b4e912f850407290dde0f5fb773e7f9d5db8b38518f7f07f22181',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/8ba768af9e7a4848a9274ab71f3be9b735538fdc884a6fe7f87034687191b9be_512.png',
  },
  {
    id: 'cd9e719c43196a8060d3943a383f022b5e8808f6fe0b14e6e263683987266ba3',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/b7513840dec5b8c2d9cfafb27789b3fa75453530dc147a0e8cb594496747472d_512.png',
  },
  {
    id: '8b7eb67d252b38f6e059d9faad8908510d08bb9963de10ce657efd7a96c44218',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/224977aa5527262df05b587354a7585f3e17639d0feea76af10fd1565556ce8b_512.png',
  },
  {
    id: '350e1c737e75af060349d6cd30812a5442c1edeac276286c4fa41fd547be0981',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/04b900c267901db01b967e53c0af6256fb53e3134fdd580d2666486359da6429_512.png',
  },
  {
    id: '004c877ee3c993f44e8db8513c34528683e83fc54949452b009ea8e12a9405ab',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/8fd2c9bb07907820ab83c4b746c602bc5d0eecde490ed7195d210eaeb9ec6456_512.png',
  },
  {
    id: '315c38180a6b2c0ba75491e3b5fd0683d511c5b6ded4f9bb93a929d8846e7004',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/b4fffa6602d1fb4ef157da186aeb551ff29af7cf6f758ef90dc6b1c7d7d58927_512.png',
  },
  {
    id: '9846183dae9ea5f32b266aa54ef64776d04c82816e9930b2b700f9433eb86531',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/58481472f07913f2529aff4b5c6ca1c0b7eaca9e7af3b2df2bb5a6892b1af399_512.png',
  },
  {
    id: '6b00c31253a5a8f89ceff094ef434153c75925104d05cfc1aef2c4f85c647abe',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/2551a538205f3e2b3defd1842a635a0dbad5ae9790a33b4d893ac066c695f023_512.png',
  },
  {
    id: '99e58d16cf1acfbbb7ab1fbac1681224ec9b2aee0e15434627069579ff18a4e2',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/f6a73646ffeccbe76888e3c4c17a6a893d3887dfc3be99f89680d95bc6382617_512.png',
  },
  {
    id: 'e3e1ecf366bd2413f467caf4463455ff421b91c71024be52d99b545f2d672ac3',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/96643313254ed1a588aa0721871637d37d4a66a89fd54869098ea29c15ea28ed_512.png',
  },
  {
    id: 'd2a5752463b91879df9649ffb8243e020343cfe71aeadb09217509a1f6005526',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/7aaf6aa3ebbce5dfea03a81771d1403d73825c0c0a274fb286c1078ea49d6281_512.png',
  },
  {
    id: '27d9c84798e0b3a4e2bb667f9d3fffdc5c5edfacd27f451de1a37af19d7df70f',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/0b89da83cf03c25ef306e867d18a3ac922616a0ff16d880524364af660ee1790_512.png',
  },
  {
    id: 'e78b7daca606f17dd6e42b59e55882b3e14d5081e4902187c8bced432f311921',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/d01ef216489d8256eed0cc6aca8587d035d42bf3bd518893ec6dd0f64d3f4b9e_512.png',
  },
  {
    id: '220f9450ef02ee02fcc66f05dbc23872624ffc5f964f0610a90df8cfcaac4b44',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/ee3a1fa0691d01e2742b1144c9bd064457e91133ad56056cc3a424008a8be7f7_512.png',
  },
  {
    id: '62c12a24556d20e6eb089991dff05a1a2fbb6f67eb3c0d3e9b914ee13173b6a6',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/eb003bc8901a43d12510b5fcb25197a255371eb3e32618b4b47cc63bd0b1a54c_512.png',
  },
  {
    id: 'af855c3de114d7e276551c46cfce7615df1b4c6ba27dd4fe44cbe6c2fb1dbe98',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/cfecd41f7fc803bf62300463b41bdb2867779b0561b52016ef11e461113d4cfe_512.png',
  },
  {
    id: '49438a89d13398c0c5b05803ed19f585631a51ecc1076b5629f0287e8074017f',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/beb5441b091c383368d68bbab4822889e29200be7d99dd4d5e628ef3fd23b3cc_512.png',
  },
  {
    id: '254fb8456c73452690049ae628f9e9e3b491e04b1523c36ea89a718a09cbca5f',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/09b75b5f282b965e6a3f6a55d5951ef42af5222c48d5dbf13c9fb972f89c41be_512.png',
  },
  {
    id: 'd6706df9e74be2a4f0e6425364847e3c3041f10010c285385d7ef8fcd73eb49d',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/2a0c72c2d10bb36d7e41826840b53ec0a5f858013a871fa3c129928edc9dccd5_512.png',
  },
  {
    id: '648957833200f970d3de150beb90596a35907c778937af403743d2a0a8523284',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/4adc88018dafe6b04ae1a701b677e27e905c806bc91c41cbc322d0c78e01662e_512.png',
  },
  {
    id: 'bd1f18015f024ee64e9ba0c499b7c38e8272d6d37644f4c08983a25e81852601',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/cdf8b2b3b3c4524636ab77e4f669bee61b24b4c69c38cde16a78bd199623615b_512.png',
  },
  {
    id: '368b1737ed866d969031e75d07154bc7f455972ac883f10ed0a155dd09e5fbdd',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/2c0e89d3ab7d916d9f2ed9dcc90d2c32d4d21d32153fa1b4ccb0668bc93fee50_512.png',
  },
  {
    id: '147696b9134be24e1331e16eb553ee3f89d16da8d5dc4531c220f2b63a36c65f',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/dc6ed6373104bb9d548c10826e2792587009341283784028ac97ecdce730da72_512.png',
  },
  {
    id: '03e8be4e3578b21593125c6b054f6a42365a57519a9298d50c3eb57fb8a95053',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/afe5023aea04c3aff4d45dc93043d0685232c26d7569d00158f552a7314d2d9e_512.png',
  },
  {
    id: 'fbb290da18ded0397ae4f0549fd35cd7261c492bf3e65e4e5b72bf4df8f07041',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/6efd3c190e9f521bdfa15ad0bacc99ac1012b0281a96a39de9c526a7066b34db_512.png',
  },
  {
    id: '8123ec891d048488ed110baff5b047e5b11e5ca4ee7a81c2ba04abf3eda4f077',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/944b20b91b985fa30c7215cdefbda66cd0ee450eea609de7f0f80b0297a51de2_512.png',
  },
  {
    id: '3985b75a8d94ccd9e08dd70f7e9c5592e0b7c720b0e3ac663e5fc8bc0a58c16a',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/cede5312280b2ecca4122e972a973430b71cfdd216fc04172eee8082ffc8f42f_512.png',
  },
  {
    id: '856b678a377760b0fa1148790b4727773027160331b26f427cb0a63b8031c917',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/8108294b64c0267b93d01825b1cd5e3e784499f34e08cf96533ecdc6dcaa47ee_512.png',
  },
  {
    id: '8667e4b91851bad935fc6e3f756b8852e2b4aa2b1d0ee478eb1eaf17114a19cf',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/6092362aa911546fd58024df60f54773c1d0c3b556a8ef1845922dcc4d3dc242_512.png',
  },
  {
    id: '30d6abda0d3b7fb358b1e52f8c341724693f44195f6919e28dd54e5bd8debd67',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/250871123312bc49d2b2680545e5e87bc9dcef2c75673228b6ae7bf5895a2837_512.png',
  },
  {
    id: '4ae0ad427435e2d427631b5d6f1836692657ac244f75a0ad79ee723042252e86',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/3c056d7045e9cb71ecd8551dde5eb6ca2e8353046352e6bc8eb74155d43703f9_512.png',
  },
  {
    id: 'a7079ed0ebecf78349d7d7007f72f7aed76a61aec452ff0f667a872bd3cbad8b',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/47cec3cc53f0b3384a44c661aa477d4dd57817892f6ce594868424301553fab6_512.png',
  },
  {
    id: 'fff3da292a60173bfa1282f7d1f1275ac88f2d215c59cfdfb8cc4300e8dc3ac3',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/addd744e87f9182f3a3a99e031d8df15962de89e2edf53bb7c5b3054e22801b9_512.png',
  },
  {
    id: 'ca93cf8396f6b5340728968fa1ff8e6213db58944ffb3620155666e9a74c6489',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/ad1403e346d1818897b88c20f143b73948666a9a0a669527758d7ca345f551f1_512.png',
  },
  {
    id: '914c28bd21bff9aec6e4e627b21a68f9fc07ab7da5a26475bfb0c719b2f0acd1',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/105822e6587dd37627d4bf40139fc169fae47223aecc79f9e7aa92d393cd40c1_512.png',
  },
  {
    id: '6f0115697182854aa6824054a8e1cbb074c5b5bed0fd6f9ef1d4cbe23d9d6dea',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/0b5971f8783e094a8b88e23494dfc5a0504c43b16bb284d9b7bcc5c8b2da0c0c_512.png',
  },
  {
    id: 'd27fa4cc8a801eb574f637dc6995d1fe8fbb61ffbce774405197146cf1c161b1',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/c6c5e2212ed0c3a05eb9a06bcf156920cadfcaf01d0ae60f829ed972b032f345_512.png',
  },
  {
    id: '528ee728250aa5e67d4db3888f3875d1dfeaba9842fcee796fee8ab081c96638',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/10f5f64dde4641b79d3d586cea3193f9d9f7ccf3a5767fe69a740a28063f557a_512.png',
  },
  {
    id: '72705efa881f59b2a7cfdd45e58db66f68d074706c1953475684db1b3ab77f01',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/85aef247aa7275f3a2d9100d79def9ec65d7dec5da842c992f0cc280107a226f_512.png',
  },
  {
    id: '9c4adab6abbab10046d8c6c3c76682a941779100fea13b6d1791fc16e9a01667',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/e069ca1a9f6927b5c92138a77643c71afed1b7e6358f75776bf271b3abd6f769_512.png',
  },
  {
    id: 'e4e3748a7884e9f8c78a0d37b8bd0a2ef2f27e6a906b2a3478a4174e390ce1a5',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/d44764ec2792a48e67059360882c254c105af995f1760563ebf7d67c5a4a454a_512.png',
  },
  {
    id: 'b1347880157961a42403c158bfbf2f52df41b47b8830ac009630f23f4f417e98',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/adf1972d3855857e0c9ef2f4805f1e83fb7f60b87e1c38b13d74c38912d87285_512.png',
  },
  {
    id: '5c3d81647993ca25e432fface1e52f0e105362f84a85ec7011a9ecaafe9fb424',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/83311b1ad88659f72058b9eeaf983d51c2ec166354e789315f43013e71f34026_512.png',
  },
  {
    id: '0ee3224e822223e9f12acaa80c69a5a713d2f4104d7fc1d843dac9c634fb9ee1',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/ef500e0854fc8992879e1135a6dad5e11cf8ce218c5dc23adc7de9a418f25863_512.png',
  },
  {
    id: '6aa27a2b1366226332221807dc154ade85e6f321644dd53bb62fe70fac3ef87e',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/d303f2957d25170e085e4bcc5d66dec7e9c26c0a19e615670a2d723832fdbd5b_512.png',
  },
  {
    id: '03af6c692b808e4134dcca4ec03158f7db46c093e37e396ddedd91f9d330c714',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/ae7e94d8002733c6e62f0a4f48e3ec391a407a556001ccd652278dccef54fc49_512.png',
  },
  {
    id: '8b9d4e4684b4ba21a682d83be89237a392d546141098dcb13683f1c91b0987cb',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/7be753db8c3c4f867dc7617af2b7c2713a018149e4d3e4a83aa7168dc418c491_512.png',
  },
  {
    id: 'dfb643065c1eb883184347c5e1c9a1e7a7f57bc70326d48fc382be4962242ea6',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/017cac3eba861f5f6a43371ff81d992f2fa5420fbea691a66ee2974bcfdef455_512.png',
  },
  {
    id: '64d8f08fc765e4b23720b9744204151b949e73135bc507cce6f1074c61db3812',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/b00f7b4f872a9677874be74e72a39cbbb3f33c6efcce1293212a2fd8f558fee6_512.png',
  },
  {
    id: '5a53e3fafaa3b2ee0f832036fba00cac3f7b76e873d0691a7113f948296b3d5f',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/5abc82acd54104d8c746d1edf9bbe18a0e78c5ad529d04fb0807bdf4185d6087_512.png',
  },
  {
    id: '2dec0d975323ee57071224b784db70f7d9e42a7a0cedf871c26095f44ee6167e',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/c44b59a188b1297f2cd4bea175aa6186e570c67e51854a6411cf2321be2bde0f_512.png',
  },
  {
    id: 'c78ac8e07f7acae9e967d647a8c3c4ee28a2924e4b680bca83b8783f28d7d5e6',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/c592329e48e1313ae0bdc4402ac47e99a9b68aa49868f02031b12436348ce112_512.png',
  },
  {
    id: 'dc909a28db2327c17ac08245ebf00feef1a54d9345375d7bbb5b7480b01520f8',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/2488578d46d7624853ef8a5431ae80239cd46a538669b21040b3b08f3de4d69b_512.png',
  },
  {
    id: 'd86c745fc2004e9e471a977152118677c37e91823a953d8301b5abba0d09d300',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/b7a8e274787c96159b243dc92b7b17f1e6bb8df8f8c3e758efdf053a2302c181_512.png',
  },
  {
    id: '7b7f21d4b1196baf0f31ab251ce322a0c0e14062777637ad7139f7965261ca70',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/352d630e94378aa5a7e5736d0885f869ca90923ba973c773146303e9c18654bd_512.png',
  },
  {
    id: 'db1f3e71d09f53f6c2838f8b507a6a5c8ef96c95aa80f3ada484457e54a1d9c6',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/57bd250c0450746c401ef4570b95efba9f18005aa6ab7f16e9c951dd909b73da_512.png',
  },
  {
    id: '221c9c3df473af7851ffa0bf50b8f634088535e84aae46a63b34a0ab91981b33',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/01371fbc29695ede4756e9e717f72534becf3ef66cad7ec3650f882d1dae4944_512.png',
  },
  {
    id: '30bf8a1f0fcc4d1029b84eae92e7cc850da5c991193b55593bbc6fce5b848216',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/34f03d6d638d7a88ee4ef22241a65cf4fbad6a9cc9273bb18927cfba95d46ead_512.png',
  },
  {
    id: '6fde696e099ef2ea3df5d86acfb676b014de8ea9f209fe7081f036aaef7b7f8b',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/a7d01c51656cc37f24fcb8abf41b1f7e7948f4321e4d142568431d41c67efde3_512.png',
  },
  {
    id: 'd6b68d5fd61a0eea4fa89cb1934362638866795771a622eed409168128cc778d',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/57151e6c20c60003f3b05e987e010c74addbfb5d105d9a3f0bb4f571d66ee64e_512.png',
  },
  {
    id: 'c194912de0f3e13a6814128967738e6e0c8e573d5497cfb7a05ed19090e380d8',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/35e90a2762def63d46de0f6b20d716048c05f8a682a2036cd1168fa2e84dde45_512.png',
  },
  {
    id: '0233c18c352bfeb863afc63a5afaa1ff65882f56f1f9cdc40ba28cf11185a675',
    uri: 'https://assets.mainnet.mintgarden.io/thumbnails/d7fdcf93bdff2046a96ac2cb9a481681fc5feaaf77ea70c2e9334280b0822aca_512.png',
  },
];
