
import { AsyncStorage } from 'react-native';
import remote from '../nSights/src/Remote'
export default class SampleAPI {


  authenticateUser(username, password) {
    console.log("login");
    return new remote().fetchJSON('api/auth/login', 'POST', { user_name: username, password: password })
  }

  getAllKudos(is_private, user_id) {
    console.log("get all kudos");
    return new remote().fetchJSON('api/home', 'GET', { is_private: is_private, user_id: user_id })
  }

  //postKudos
  postKudos() {
    return new remote().fetchJSON('api/home', 'POST', {
      ownerId: 1,
      targetUserId: 11,
      content: "fgfdgdfg",
      created_datetime: "",
      is_private: 1
    })
  }

  //check To Delete Or Mute
  checkToDeleteOrMute() {
    return new remote().fetchJSON('api/home', 'POST', {
      userId: 1,
      ownerId: 1
    })
  }

  //addPostComment
  addPostComment() {
    return new remote().fetchJSON('api/home', 'POST', {
      parent_post_id: 1,
      owner_id: 1,
      content: "cool",
      parent_comment_id: null
    })
  }

  //addPostLikes
  addPostLikes() {
    return new remote().fetchJSON('api/home', 'POST', {
      parent_post_id: 1,
      owner_id: 1
    })
  }

  //getAllReportReason
  getAllReportReason() {
    return new remote().fetchJSON('api/home', 'GET', {});
  }


  //delete/reportPost

  deleteOrReportPost() {
    return new remote().fetchJSON('api/home', 'POST', {
      ownerId: 1,
      post_id: 1,
      is_blocked: 1,
      action: "DeleteORReport",
      reason_id: null,
      target_user_id: null,
      reason: "",
      created_datetime: ""
    })
  }

  getProfile(userId) {
    return new remote().fetchJSON('api/auth/login', 'POST', { user_id: userId })
  }

  getNotifications(userId) {
    return new remote().fetchJSON('api/auth/login', 'POST', { user_id: userId })
  }

  getAllAchievements(userId) {
    return new remote().fetchJSON('api/auth/login', 'POST', { user_id: userId })
  }

  getUserRatings(userId) {
    return new remote().fetchJSON('api/auth/login', 'POST', { user_id: userId })
  }

  getBookmarkedQuotes(userId) {
    return new remote().fetchJSON('api/auth/login', 'POST', { user_id: userId })
  }


  gaveMostFeedback() {
    return new remote().fetchJSON('api/auth/login', 'GET', {})
  }

  gotMostFeedback() {
    return new remote().fetchJSON('api/auth/login', 'GET', {})
  }

  gaveMostKudos() {
    return new remote().fetchJSON('api/auth/login', 'GET', {})
  }

  gotMostKudos() {
    return new remote().fetchJSON('api/auth/login', 'GET', {})
  }

  getRankingPosition(userId) {
    return new remote().fetchJSON('api/auth/login', 'POST', {user_id: userId})
  }



}
