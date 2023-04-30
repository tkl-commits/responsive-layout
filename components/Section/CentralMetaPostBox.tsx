import Link from "next/link";
import CentralContainer from "./CentralContainer";

export default function CentralMetaPostBox() {
  return (
    <CentralContainer>
      central-meta postbox
      {/* <div class="central-meta postbox">
        <span class="create-post">Create post</span>
        <div class="new-postbox">
          <figure>
            <img src="images/resources/admin.jpg" alt="" />
          </figure>
          <div class="newpst-input">
            <form method="post">
              <textarea
                rows="2"
                placeholder="Share some what you are thinking?"
              ></textarea>
            </form>
          </div>
          <div class="attachments">
            <ul>
              <li>
                <span class="add-loc">
                  <i class="fa fa-map-marker"></i>
                </span>
              </li>
              <li>
                <i class="fa fa-music"></i>
                <label class="fileContainer">
                  <input type="file" />
                </label>
              </li>
              <li>
                <i class="fa fa-image"></i>
                <label class="fileContainer">
                  <input type="file" />
                </label>
              </li>
              <li>
                <i class="fa fa-video-camera"></i>
                <label class="fileContainer">
                  <input type="file" />
                </label>
              </li>
              <li>
                <i class="fa fa-camera"></i>
                <label class="fileContainer">
                  <input type="file" />
                </label>
              </li>
              <li class="preview-btn">
                <button class="post-btn-preview" type="submit" data-ripple="">
                  Preview
                </button>
              </li>
            </ul>
            <button class="post-btn" type="submit" data-ripple="">
              Post
            </button>
          </div>
          <div class="add-location-post">
            <span>Drag map point to selected area</span>
            <div class="row">
              <div class="col-lg-6">
                <label class="control-label">Lat :</label>
                <input type="text" class="" id="us3-lat" />
              </div>
              <div class="col-lg-6">
                <label>Long :</label>
                <input type="text" class="" id="us3-lon" />
              </div>
            </div>
             <!-- map --> 
            <div id="us3">
              <div style="height: 100%; width: 100%;">
                <div style="overflow: hidden;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <!-- add post new box --> 
      <div class="promote-baner blackish low-opacity">
        <div
          class="bg-image"
          style="background-image: url(images/resources/coming-soon-bg.jpg)"
        ></div>
        <span>
          Create Your Goal and boostup your posts, content, and get more
          contacts and comments
        </span>
        <ul class="ads-links">
          <li>
            <a
              href="ad-center.html"
              title=""
              data-toggle="tooltip"
              data-original-title="Create a new ad from scratch"
            >
              <i class="fa fa-edit"></i> Choose a Goal
            </a>
          </li>
        </ul>
      </div>
      <div class="central-meta">
        <span class="create-post">
          Recent Stories
          <a href="#" title="">
            See All
          </a>
        </span>
        <div class="story-postbox">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3">
              <div class="story-box">
                <figure>
                  <img src="images/resources/story-1.jpg" alt="" />
                  <span>Add Your Story</span>
                </figure>
                <div
                  class="story-thumb"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="Add Your Story"
                >
                  <i class="fa fa-plus"></i>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3">
              <div class="story-box">
                <figure>
                  <img src="images/resources/story-2.jpg" alt="" />
                  <span>Adam James</span>
                </figure>
                <div
                  class="story-thumb"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="Adam James"
                >
                  <img src="images/resources/thumb-2.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3">
              <div class="story-box">
                <figure>
                  <img src="images/resources/story-3.jpg" alt="" />
                  <span>Emily grey</span>
                </figure>
                <div
                  class="story-thumb"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="Emily grey"
                >
                  <img src="images/resources/thumb-3.jpg" alt="" />
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3">
              <div class="story-box">
                <figure>
                  <img src="images/resources/story-4.jpg" alt="" />
                  <span>Jhon Deo</span>
                </figure>
                <div
                  class="story-thumb"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="Jhon Deo"
                >
                  <img src="images/resources/thumb-4.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="stories-wraper">
            <div class="status-story">
              <span class="close-story">
                <i class="ti-close"></i>
              </span>
              <div class="row">
                <div class="col-lg-4">
                  <div class="stories-users">
                    <h5>Stories</h5>
                    <div class="my-status">
                      <figure>
                        <img
                          src="images/resources/friend-avatar10.jpg"
                          alt=""
                        />
                      </figure>
                      <a href="#" title="" class="main-btn">
                        Add New
                      </a>
                      <div class="story-user">
                        <span>My Story</span>
                        <ins>No updates</ins>
                      </div>
                    </div>
                    <ul
                      class="frnds-stories ps-container ps-theme-default"
                      data-ps-id="3811f77b-5463-984a-b532-767fc7a309c8"
                    >
                      <li>
                        <figure>
                          <img
                            src="images/resources/friend-avatar11.jpg"
                            alt=""
                          />
                        </figure>
                        <div class="story-user">
                          <span>Emily doll</span>
                          <ins>yesterday</ins>
                        </div>
                      </li>
                      <li>
                        <figure>
                          <img
                            src="images/resources/friend-avatar15.jpg"
                            alt=""
                          />
                        </figure>
                        <div class="story-user">
                          <span>Jhon Borny</span>
                          <ins>3 days ago</ins>
                        </div>
                      </li>
                      <li>
                        <figure>
                          <img
                            src="images/resources/friend-avatar12.jpg"
                            alt=""
                          />
                        </figure>
                        <div class="story-user">
                          <span>Sarah Khan</span>
                          <ins>2 days ago</ins>
                        </div>
                      </li>
                      <li>
                        <figure>
                          <img
                            src="images/resources/friend-avatar13.jpg"
                            alt=""
                          />
                        </figure>
                        <div class="story-user">
                          <span>Zara Hayat</span>
                          <ins>1 day ago</ins>
                        </div>
                      </li>
                      <li>
                        <figure>
                          <img
                            src="images/resources/friend-avatar14.jpg"
                            alt=""
                          />
                        </figure>
                        <div class="story-user">
                          <span>Zing Jang</span>
                          <ins>2 days ago</ins>
                        </div>
                      </li>

                      <li>
                        <figure>
                          <img
                            src="images/resources/friend-avatar16.jpg"
                            alt=""
                          />
                        </figure>
                        <div class="story-user">
                          <span>Emma watson</span>
                          <ins>jan,12 2020</ins>
                        </div>
                      </li>
                      <div
                        class="ps-scrollbar-x-rail"
                        style="left: 0px; bottom: 0px;"
                      >
                        <div
                          class="ps-scrollbar-x"
                          tabindex="0"
                          style="left: 0px; width: 0px;"
                        ></div>
                      </div>
                      <div
                        class="ps-scrollbar-y-rail"
                        style="top: 0px; right: 0px;"
                      >
                        <div
                          class="ps-scrollbar-y"
                          tabindex="0"
                          style="top: 0px; height: 0px;"
                        ></div>
                      </div>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-8">
                  <div id="btns-wrapper">
                    <button class="selector-btn" id="selector0"></button>
                    <div class="prog-bar">
                      <span id="prog-bar0" style="width: 100%;"></span>
                    </div>
                    <button
                      class="selector-btn selected-btn"
                      id="selector1"
                    ></button>
                    <div class="prog-bar">
                      <span id="prog-bar1" style="width: 5.5%;"></span>
                    </div>
                    <button class="selector-btn" id="selector2"></button>
                    <div class="prog-bar">
                      <span id="prog-bar2" style="width: 0px;"></span>
                    </div>
                    <button class="selector-btn" id="selector3"></button>
                    <div class="prog-bar">
                      <span id="prog-bar3" style="width: 0px;"></span>
                    </div>
                    <button class="selector-btn" id="selector4"></button>
                  </div>
                  <div id="slideshow">
                    <img
                      class="slide fade-out"
                      src="https://placeimg.com/856/380/arch"
                      alt="11"
                    />
                    <img
                      class="slide fade-in"
                      src="https://placeimg.com/855/379/arch"
                      alt="2"
                    />
                    <img
                      class="slide fade-out"
                      src="https://placeimg.com/857/381/arch"
                      alt="3"
                    />
                    <img
                      class="slide fade-out"
                      src="https://placeimg.com/858/382/arch"
                      alt="4"
                    />
                    <img
                      class="slide fade-out"
                      src="https://placeimg.com/856/380/arch"
                      alt="5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <!-- top stories --> 
      <div class="central-meta">
        <div class="user-post">
          <div class="friend-info">
            <figure>
              <i class="fa fa-fire"></i>
            </figure>
            <div class="friend-name">
              <ins>
                <a title="" href="#">
                  Suggested
                </a>
              </ins>
              <span>
                <i class="icofont-runner-alt-1"></i> Follow similar People
              </span>
            </div>
            <ul class="suggested-caro owl-carousel owl-theme owl-loaded owl-responsive-1000">
              <div class="owl-stage-outer">
                <div
                  class="owl-stage"
                  style="transform: translate3d(-533.001px, 0px, 0px); transition: all 0s ease 0s; width: 1599px;"
                >
                  <div
                    class="owl-item cloned"
                    style="width: 147.667px; margin-right: 30px;"
                  >
                    <li>
                      <figure>
                        <img src="images/resources/speak-1.jpg" alt="" />
                      </figure>
                      <span>Amy Watson</span>
                      <ins>Ontario, Canada</ins>
                      <a href="#" title="" data-ripple="">
                        <i class="icofont-star"></i> Follow
                      </a>
                    </li>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 147.667px; margin-right: 30px;"
                  >
                    <li>
                      <figure>
                        <img src="images/resources/speak-2.jpg" alt="" />
                      </figure>
                      <span>Muhammad Khan</span>
                      <ins>Newyork, USA</ins>
                      <a href="#" title="" data-ripple="">
                        <i class="icofont-star"></i> Follow
                      </a>
                    </li>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 147.667px; margin-right: 30px;"
                  >
                    <li>
                      <figure>
                        <img src="images/resources/speak-3.jpg" alt="" />
                      </figure>
                      <span>Sadia Gill</span>
                      <ins>Islamabad, Pakistan</ins>
                      <a href="#" title="" data-ripple="">
                        <i class="icofont-star"></i> Follow
                      </a>
                    </li>
                  </div>
                  <div
                    class="owl-item active"
                    style="width: 147.667px; margin-right: 30px;"
                  >
                    <li>
                      <figure>
                        <img src="images/resources/speak-1.jpg" alt="" />
                      </figure>
                      <span>Amy Watson</span>
                      <ins>Ontario, Canada</ins>
                      <a href="#" title="" data-ripple="">
                        <i class="icofont-star"></i> Follow
                      </a>
                    </li>
                  </div>
                  <div
                    class="owl-item active"
                    style="width: 147.667px; margin-right: 30px;"
                  >
                    <li>
                      <figure>
                        <img src="images/resources/speak-2.jpg" alt="" />
                      </figure>
                      <span>Muhammad Khan</span>
                      <ins>Newyork, USA</ins>
                      <a href="#" title="" data-ripple="">
                        <i class="icofont-star"></i> Follow
                      </a>
                    </li>
                  </div>
                  <div
                    class="owl-item active"
                    style="width: 147.667px; margin-right: 30px;"
                  >
                    <li>
                      <figure>
                        <img src="images/resources/speak-3.jpg" alt="" />
                      </figure>
                      <span>Sadia Gill</span>
                      <ins>Islamabad, Pakistan</ins>
                      <a href="#" title="" data-ripple="">
                        <i class="icofont-star"></i> Follow
                      </a>
                    </li>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 147.667px; margin-right: 30px;"
                  >
                    <li>
                      <figure>
                        <img src="images/resources/speak-1.jpg" alt="" />
                      </figure>
                      <span>Amy Watson</span>
                      <ins>Ontario, Canada</ins>
                      <a href="#" title="" data-ripple="">
                        <i class="icofont-star"></i> Follow
                      </a>
                    </li>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 147.667px; margin-right: 30px;"
                  >
                    <li>
                      <figure>
                        <img src="images/resources/speak-2.jpg" alt="" />
                      </figure>
                      <span>Muhammad Khan</span>
                      <ins>Newyork, USA</ins>
                      <a href="#" title="" data-ripple="">
                        <i class="icofont-star"></i> Follow
                      </a>
                    </li>
                  </div>
                  <div
                    class="owl-item cloned"
                    style="width: 147.667px; margin-right: 30px;"
                  >
                    <li>
                      <figure>
                        <img src="images/resources/speak-3.jpg" alt="" />
                      </figure>
                      <span>Sadia Gill</span>
                      <ins>Islamabad, Pakistan</ins>
                      <a href="#" title="" data-ripple="">
                        <i class="icofont-star"></i> Follow
                      </a>
                    </li>
                  </div>
                </div>
              </div>
              <div class="owl-controls">
                <div class="owl-nav">
                  <div class="owl-prev" style="">
                    prev
                  </div>
                  <div class="owl-next" style="">
                    next
                  </div>
                </div>
                <div class="owl-dots" style="display: none;"></div>
              </div>
            </ul>
          </div>
        </div>
      </div>
       <!-- suggested friends --> 
      <div class="adb" style="display: inline-block;">
        <div class="adv-baner">
          <span>Advertisment</span>
          <img alt="" src="images/resources/adv-baner.jpg" />
        </div>
      </div>
      <div class="loadMore">
        <div class="central-meta item" style="display: inline-block;">
          <div class="user-post">
            <div class="friend-info">
              <figure>
                <img src="images/resources/nearly1.jpg" alt="" />
              </figure>
              <div class="friend-name">
                <div class="more">
                  <div class="more-post-optns">
                    <i class="ti-more-alt"></i>
                    <ul>
                      <li>
                        <i class="fa fa-pencil-square-o"></i>Edit Post
                      </li>
                      <li>
                        <i class="fa fa-trash-o"></i>Delete Post
                      </li>
                      <li class="bad-report">
                        <i class="fa fa-flag"></i>Report Post
                      </li>
                      <li>
                        <i class="fa fa-address-card-o"></i>Boost This Post
                      </li>
                      <li>
                        <i class="fa fa-clock-o"></i>Schedule Post
                      </li>
                      <li>
                        <i class="fa fa-wpexplorer"></i>Select as featured
                      </li>
                      <li>
                        <i class="fa fa-bell-slash-o"></i>Turn off Notifications
                      </li>
                    </ul>
                  </div>
                </div>
                <ins>
                  <a href="time-line.html" title="">
                    Jack Carter
                  </a>
                  Post Album
                </ins>
                <span>
                  <i class="fa fa-globe"></i> published: September,15 2020 19:PM
                </span>
              </div>
              <div class="post-meta">
                <p>
                  Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                  condimentum rhoncus, sem quam semper libero.
                  <a href="social-post-detail.html" title="">
                    Read More
                  </a>
                </p>
                <figure>
                  <div class="img-bunch">
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-6">
                        <figure>
                          <a
                            href="#"
                            title=""
                            data-toggle="modal"
                            data-target="#img-comt"
                          >
                            <img src="images/resources/album1.jpg" alt="" />
                          </a>
                        </figure>
                        <figure>
                          <a
                            href="#"
                            title=""
                            data-toggle="modal"
                            data-target="#img-comt"
                          >
                            <img src="images/resources/album2.jpg" alt="" />
                          </a>
                        </figure>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6">
                        <figure>
                          <a
                            href="#"
                            title=""
                            data-toggle="modal"
                            data-target="#img-comt"
                          >
                            <img src="images/resources/album6.jpg" alt="" />
                          </a>
                        </figure>
                        <figure>
                          <a
                            href="#"
                            title=""
                            data-toggle="modal"
                            data-target="#img-comt"
                          >
                            <img src="images/resources/album5.jpg" alt="" />
                          </a>
                        </figure>
                        <figure>
                          <a
                            href="#"
                            title=""
                            data-toggle="modal"
                            data-target="#img-comt"
                          >
                            <img src="images/resources/album4.jpg" alt="" />
                          </a>
                          <div class="more-photos">
                            <span>+15</span>
                          </div>
                        </figure>
                      </div>
                    </div>
                  </div>
                  <ul class="like-dislike">
                    <li>
                      <a class="bg-purple" href="#" title="Save to Pin Post">
                        <i class="fa fa-thumb-tack"></i>
                      </a>
                    </li>
                    <li>
                      <a class="bg-blue" href="#" title="Like Post">
                        <i class="ti-thumb-up"></i>
                      </a>
                    </li>
                    <li>
                      <a class="bg-red" href="#" title="dislike Post">
                        <i class="ti-thumb-down"></i>
                      </a>
                    </li>
                  </ul>
                </figure>
                <div class="we-video-info">
                  <ul>
                    <li>
                      <span class="views" title="views">
                        <i class="fa fa-eye"></i>
                        <ins>1.2k</ins>
                      </span>
                    </li>
                    <li>
                      <div class="likes heart" title="Like/Dislike">
                        ❤ <span>2K</span>
                      </div>
                    </li>
                    <li>
                      <span class="comment" title="Comments">
                        <i class="fa fa-commenting"></i>
                        <ins>52</ins>
                      </span>
                    </li>

                    <li>
                      <span>
                        <a class="share-pst" href="#" title="Share">
                          <i class="fa fa-share-alt"></i>
                        </a>
                        <ins>20</ins>
                      </span>
                    </li>
                  </ul>
                  <div class="users-thumb-list">
                    <a
                      data-toggle="tooltip"
                      title=""
                      href="#"
                      data-original-title="Anderw"
                    >
                      <img alt="" src="images/resources/userlist-1.jpg" />
                    </a>
                    <a
                      data-toggle="tooltip"
                      title=""
                      href="#"
                      data-original-title="frank"
                    >
                      <img alt="" src="images/resources/userlist-2.jpg" />
                    </a>
                    <a
                      data-toggle="tooltip"
                      title=""
                      href="#"
                      data-original-title="Sara"
                    >
                      <img alt="" src="images/resources/userlist-3.jpg" />
                    </a>
                    <a
                      data-toggle="tooltip"
                      title=""
                      href="#"
                      data-original-title="Amy"
                    >
                      <img alt="" src="images/resources/userlist-4.jpg" />
                    </a>
                    <a
                      data-toggle="tooltip"
                      title=""
                      href="#"
                      data-original-title="Ema"
                    >
                      <img alt="" src="images/resources/userlist-5.jpg" />
                    </a>
                    <span>
                      <strong>You</strong>, <b>Sarah</b> and
                      <a href="#" title="">
                        24+ more
                      </a>
                      liked
                    </span>
                  </div>
                </div>
              </div>
              <div class="coment-area" style="display: block;">
                <ul class="we-comet">
                  <li>
                    <div class="comet-avatar">
                      <img src="images/resources/nearly3.jpg" alt="" />
                    </div>
                    <div class="we-comment">
                      <h5>
                        <a href="time-line.html" title="">
                          Jason borne
                        </a>
                      </h5>
                      <p>
                        we are working for the dance and sing songs. this video
                        is very awesome for the youngster. please vote this
                        video and like our channel
                      </p>
                      <div class="inline-itms">
                        <span>1 year ago</span>
                        <a class="we-reply" href="#" title="Reply">
                          <i class="fa fa-reply"></i>
                        </a>
                        <a href="#" title="">
                          <i class="fa fa-heart"></i>
                          <span>20</span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="comet-avatar">
                      <img src="images/resources/comet-4.jpg" alt="" />
                    </div>
                    <div class="we-comment">
                      <h5>
                        <a href="time-line.html" title="">
                          Sophia
                        </a>
                      </h5>
                      <p>
                        we are working for the dance and sing songs. this video
                        is very awesome for the youngster.
                        <i class="em em-smiley"></i>
                      </p>
                      <div class="inline-itms">
                        <span>1 year ago</span>
                        <a class="we-reply" href="#" title="Reply">
                          <i class="fa fa-reply"></i>
                        </a>
                        <a href="#" title="">
                          <i class="fa fa-heart"></i>
                          <span>20</span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#" title="" class="showmore underline">
                      more comments+
                    </a>
                  </li>
                  <li class="post-comment">
                    <div class="comet-avatar">
                      <img src="images/resources/nearly1.jpg" alt="" />
                    </div>
                    <div class="post-comt-box">
                      <form method="post">
                        <textarea placeholder="Post your comment"></textarea>
                        <div class="add-smiles">
                          <div class="uploadimage">
                            <i class="fa fa-image"></i>
                            <label class="fileContainer">
                              <input type="file" />
                            </label>
                          </div>
                          <span
                            class="em em-expressionless"
                            title="add icon"
                          ></span>
                          <div class="smiles-bunch">
                            <i class="em em---1"></i>
                            <i class="em em-smiley"></i>
                            <i class="em em-anguished"></i>
                            <i class="em em-laughing"></i>
                            <i class="em em-angry"></i>
                            <i class="em em-astonished"></i>
                            <i class="em em-blush"></i>
                            <i class="em em-disappointed"></i>
                            <i class="em em-worried"></i>
                            <i class="em em-kissing_heart"></i>
                            <i class="em em-rage"></i>
                            <i class="em em-stuck_out_tongue"></i>
                          </div>
                        </div>

                        <button type="submit"></button>
                      </form>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
         <!-- album post --> 
        <div class="central-meta item" style="display: inline-block;">
          <div class="user-post">
            <div class="friend-info">
              <figure>
                <img src="images/resources/nearly1.jpg" alt="" />
              </figure>
              <div class="friend-name">
                <div class="more">
                  <div class="more-post-optns">
                    <i class="ti-more-alt"></i>
                    <ul>
                      <li>
                        <i class="fa fa-pencil-square-o"></i>Edit Post
                      </li>
                      <li>
                        <i class="fa fa-trash-o"></i>Delete Post
                      </li>
                      <li class="bad-report">
                        <i class="fa fa-flag"></i>Report Post
                      </li>
                      <li>
                        <i class="fa fa-address-card-o"></i>Boost This Post
                      </li>
                      <li>
                        <i class="fa fa-clock-o"></i>Schedule Post
                      </li>
                      <li>
                        <i class="fa fa-wpexplorer"></i>Select as featured
                      </li>
                      <li>
                        <i class="fa fa-bell-slash-o"></i>Turn off Notifications
                      </li>
                    </ul>
                  </div>
                </div>
                <ins>
                  <a href="time-line.html" title="">
                    Jack Carter
                  </a>
                  share
                  <a href="#" title="">
                    link
                  </a>
                </ins>
                <span>
                  <i class="fa fa-globe"></i> published: january,5 2010 19:PM
                </span>
              </div>
              <div class="post-meta">
                <figure>
                  <a
                    href="https://www.youtube.com/watch?v=fF382gwEnG8"
                    title=""
                    data-strip-group="mygroup"
                    class="strip vdeo-link"
                    data-strip-options="width: 700,height: 450,youtube: { autoplay: 1 }"
                  >
                    <img src="images/resources/user-post.jpg" alt="" />
                    <i>  </i>
                    <h2>Canada tourist spots you must visit in 2020</h2>
                  </a>
                  <ul class="like-dislike">
                    <li>
                      <a class="bg-purple" href="#" title="Save to Pin Post">
                        <i class="fa fa-thumb-tack"></i>
                      </a>
                    </li>
                    <li>
                      <a class="bg-blue" href="#" title="Like Post">
                        <i class="ti-thumb-up"></i>
                      </a>
                    </li>
                    <li>
                      <a class="bg-red" href="#" title="dislike Post">
                        <i class="ti-thumb-down"></i>
                      </a>
                    </li>
                  </ul>
                </figure>
                <div class="description">
                  <p>
                    Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                    condimentum rhoncus, sem quam semper libero, sit amet
                    adipiscing sem neque sed ipsum. Nam quam nunc.
                    <a href="social-post-detail.html" title="">
                      Read More
                    </a>
                  </p>
                </div>
                <div class="we-video-info">
                  <ul>
                    <li>
                      <span class="views" title="views">
                        <i class="fa fa-eye"></i>
                        <ins>1.2k</ins>
                      </span>
                    </li>
                    <li>
                      <div class="likes heart" title="Like/Dislike">
                        ❤ <span>2K</span>
                      </div>
                    </li>
                    <li>
                      <span class="comment" title="Comments">
                        <i class="fa fa-commenting"></i>
                        <ins>52</ins>
                      </span>
                    </li>

                    <li>
                      <span>
                        <a class="share-pst" href="#" title="Share">
                          <i class="fa fa-share-alt"></i>
                        </a>
                        <ins>20</ins>
                      </span>
                    </li>
                  </ul>
                  <div class="users-thumb-list">
                    <a
                      data-toggle="tooltip"
                      title=""
                      href="#"
                      data-original-title="Anderw"
                    >
                      <img alt="" src="images/resources/userlist-1.jpg" />
                    </a>
                    <a
                      data-toggle="tooltip"
                      title=""
                      href="#"
                      data-original-title="frank"
                    >
                      <img alt="" src="images/resources/userlist-2.jpg" />
                    </a>
                    <a
                      data-toggle="tooltip"
                      title=""
                      href="#"
                      data-original-title="Sara"
                    >
                      <img alt="" src="images/resources/userlist-3.jpg" />
                    </a>
                    <a
                      data-toggle="tooltip"
                      title=""
                      href="#"
                      data-original-title="Amy"
                    >
                      <img alt="" src="images/resources/userlist-4.jpg" />
                    </a>
                    <a
                      data-toggle="tooltip"
                      title=""
                      href="#"
                      data-original-title="Ema"
                    >
                      <img alt="" src="images/resources/userlist-5.jpg" />
                    </a>
                    <span>
                      <strong>You</strong>, <b>Sarah</b> and
                      <a href="#" title="">
                        24+ more
                      </a>
                      liked
                    </span>
                  </div>
                </div>
              </div>
              <div class="coment-area" style="">
                <ul class="we-comet">
                  <li>
                    <div class="comet-avatar">
                      <img src="images/resources/nearly3.jpg" alt="" />
                    </div>
                    <div class="we-comment">
                      <h5>
                        <a href="time-line.html" title="">
                          Jason borne
                        </a>
                      </h5>
                      <p>
                        we are working for the dance and sing songs. this video
                        is very awesome for the youngster. please vote this
                        video and like our channel
                      </p>
                      <div class="inline-itms">
                        <span>1 year ago</span>
                        <a class="we-reply" href="#" title="Reply">
                          <i class="fa fa-reply"></i>
                        </a>
                        <a href="#" title="">
                          <i class="fa fa-heart"></i>
                          <span>20</span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="comet-avatar">
                      <img src="images/resources/comet-4.jpg" alt="" />
                    </div>
                    <div class="we-comment">
                      <h5>
                        <a href="time-line.html" title="">
                          Sophia
                        </a>
                      </h5>
                      <p>
                        we are working for the dance and sing songs. this video
                        is very awesome for the youngster.
                        <i class="em em-smiley"></i>
                      </p>
                      <div class="inline-itms">
                        <span>1 year ago</span>
                        <a class="we-reply" href="#" title="Reply">
                          <i class="fa fa-reply"></i>
                        </a>
                        <a href="#" title="">
                          <i class="fa fa-heart"></i>
                          <span>20</span>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#" title="" class="showmore underline">
                      more comments+
                    </a>
                  </li>
                  <li class="post-comment">
                    <div class="comet-avatar">
                      <img src="images/resources/nearly1.jpg" alt="" />
                    </div>
                    <div class="post-comt-box">
                      <form method="post">
                        <textarea placeholder="Post your comment"></textarea>
                        <div class="add-smiles">
                          <div class="uploadimage">
                            <i class="fa fa-image"></i>
                            <label class="fileContainer">
                              <input type="file" />
                            </label>
                          </div>
                          <span
                            class="em em-expressionless"
                            title="add icon"
                          ></span>
                          <div class="smiles-bunch">
                            <i class="em em---1"></i>
                            <i class="em em-smiley"></i>
                            <i class="em em-anguished"></i>
                            <i class="em em-laughing"></i>
                            <i class="em em-angry"></i>
                            <i class="em em-astonished"></i>
                            <i class="em em-blush"></i>
                            <i class="em em-disappointed"></i>
                            <i class="em em-worried"></i>
                            <i class="em em-kissing_heart"></i>
                            <i class="em em-rage"></i>
                            <i class="em em-stuck_out_tongue"></i>
                          </div>
                        </div>
                        <button type="submit"></button>
                      </form>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
         <!-- video post --> 
      </div>
      <button class="btn-view btn-load-more">Load More</button>
       <!-- centerl meta -->  */}
    </CentralContainer>
  );
}
