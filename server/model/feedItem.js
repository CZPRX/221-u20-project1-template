class FeedItem {
  constructor(title, body, linkUrl, imageUrl) {
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
  }
}
const feedItems = [];

function createFeedItem(title, body, linkUrl, imageUrl) {
  const item = new FeedItem(title, body, linkUrl, imageUrl);
  feedItems.push(item);
  return item;
}

function getAllFeedItems() {
  return feedItems;
}

function getFeedItemById(id) {
  return feedItems[id];
}

function deleteFeedItem(id) {
  return feedItems.splice(id, 1);
}

function updateFeedItem(id, newData) {
  const item = feedItems[id];
  if (!item) return null;
  Object.assign(item, newData);
  return item;
}

module.exports = {
  createFeedItem,
  getAllFeedItems,
  getFeedItemById,
  deleteFeedItem,
  updateFeedItem
};
