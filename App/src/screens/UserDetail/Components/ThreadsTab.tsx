import {View} from 'react-native';
import React, {Fragment, memo, useCallback} from 'react';
import {PostItem} from '@components/index';
// import {AppStyleSheet} from '@themes/responsive';
// import colors from '@themes/color';
import {dummyPost} from '@constants/dummyData';
import {layout} from '@themes/index';
import {Tabs} from 'react-native-collapsible-tab-view';

const ThreadsTab = () => {
  const _renderItem = useCallback(({item}) => {
    let isRepliesPost = item.replies.length > 0;
    if (isRepliesPost) {
      return (
        <Fragment>
          <PostItem
            postData={item.rootPost.post}
            userData={item.rootPost.userData}
            haveReplies={true}
            isRootPost={true}
          />
          {item.replies.map((replies, index) => {
            let isLastReplies =
              item.replies[item.replies.length - 1].id === replies.id;
            return (
              <PostItem
                key={index}
                postData={replies.post}
                userData={replies.userData}
                haveReplies={!isLastReplies}
                isReplies={true}
              />
            );
          })}
        </Fragment>
      );
    } else {
      return (
        <PostItem
          postData={item.rootPost.post}
          userData={item.rootPost.userData}
        />
      );
    }
  }, []);

  return (
    <View style={[layout.fill]}>
      <Tabs.FlatList
        data={dummyPost}
        renderItem={_renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default memo(ThreadsTab);

// const styles = AppStyleSheet.create({
//   separator: {borderBottomColor: colors.border, borderBottomWidth: 1},
// });