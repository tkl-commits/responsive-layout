import Link from "next/link";
import SectionContainer from "./SectionContainer";

export default function SectionSideBarRight() {
  return (
    <SectionContainer>
      <aside class="sidebar static right">
        <div class="widget">
          <h4 class="widget-title">How Pitnik Works</h4>
          <div class="how-to">
            <a
              href="https://youtu.be/TDGq4aeevgY"
              title=""
              data-strip-group="mygroup"
              class="strip"
              data-strip-options="width: 700,height: 450,youtube: { autoplay: 1 }"
            >
              <img src="images/resources/how-its-work.jpg" alt="" />
              <i>
                <svg
                  version="1.1"
                  class="play"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  height="50px"
                  width="50px"
                  viewBox="0 0 100 100"
                  enable-background="new 0 0 100 100"
                  xml:space="preserve"
                >
                  <path
                    class="stroke-solid"
                    fill="none"
                    stroke=""
                    d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
													C97.3,23.7,75.7,2.3,49.9,2.5"
                  ></path>
                  <path
                    class="icon"
                    fill=""
                    d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
                  ></path>
                </svg>
              </i>
            </a>
          </div>
        </div>
        {/* <!-- how it's work --> */}
        <div class="widget">
          <h4 class="widget-title">Your page</h4>
          <div class="your-page">
            <figure>
              <a href="#" title="">
                <img src="images/resources/friend-avatar9.jpg" alt="" />
              </a>
            </figure>
            <div class="page-meta">
              <a href="#" title="" class="underline">
                My Creative Page
              </a>
              <span>
                <i class="ti-comment"></i>
                <a href="insight.html" title="">
                  Messages <em>9</em>
                </a>
              </span>
              <span>
                <i class="ti-bell"></i>
                <a href="insight.html" title="">
                  Notifications <em>2</em>
                </a>
              </span>
            </div>
            <ul class="page-publishes">
              <li>
                <span>
                  <i class="ti-pencil-alt"></i>Publish
                </span>
              </li>
              <li>
                <span>
                  <i class="ti-camera"></i>Photo
                </span>
              </li>
              <li>
                <span>
                  <i class="ti-video-camera"></i>Live
                </span>
              </li>
              <li>
                <span>
                  <i class="fa fa-user-plus"></i>Invite
                </span>
              </li>
            </ul>
            <div class="page-likes">
              <ul class="nav nav-tabs likes-btn">
                <li class="nav-item">
                  <a
                    class="active"
                    href="#link1"
                    data-toggle="tab"
                    data-ripple=""
                  >
                    likes
                  </a>
                </li>
                <li class="nav-item">
                  <a class="" href="#link2" data-toggle="tab" data-ripple="">
                    views
                  </a>
                </li>
              </ul>
              {/* <!-- Tab panes --> */}
              <div class="tab-content">
                <div class="tab-pane active fade show" id="link1">
                  <span>
                    <i class="ti-heart"></i>884
                  </span>
                  <a href="#" title="weekly-likes">
                    35 new likes this week
                  </a>
                  <div class="users-thumb-list">
                    <a
                      href="#"
                      title=""
                      data-toggle="tooltip"
                      data-original-title="Anderw"
                    >
                      <img src="images/resources/userlist-1.jpg" alt="" />
                    </a>
                    <a
                      href="#"
                      title=""
                      data-toggle="tooltip"
                      data-original-title="frank"
                    >
                      <img src="images/resources/userlist-2.jpg" alt="" />
                    </a>
                    <a
                      href="#"
                      title=""
                      data-toggle="tooltip"
                      data-original-title="Sara"
                    >
                      <img src="images/resources/userlist-3.jpg" alt="" />
                    </a>
                    <a
                      href="#"
                      title=""
                      data-toggle="tooltip"
                      data-original-title="Amy"
                    >
                      <img src="images/resources/userlist-4.jpg" alt="" />
                    </a>
                    <a
                      href="#"
                      title=""
                      data-toggle="tooltip"
                      data-original-title="Ema"
                    >
                      <img src="images/resources/userlist-5.jpg" alt="" />
                    </a>
                    <a
                      href="#"
                      title=""
                      data-toggle="tooltip"
                      data-original-title="Sophie"
                    >
                      <img src="images/resources/userlist-6.jpg" alt="" />
                    </a>
                    <a
                      href="#"
                      title=""
                      data-toggle="tooltip"
                      data-original-title="Maria"
                    >
                      <img src="images/resources/userlist-7.jpg" alt="" />
                    </a>
                  </div>
                </div>
                <div class="tab-pane fade" id="link2">
                  <span>
                    <i class="fa fa-eye"></i>440
                  </span>
                  <a href="#" title="weekly-likes">
                    440 new views this week
                  </a>
                  <div class="users-thumb-list">
                    <a
                      href="#"
                      title=""
                      data-toggle="tooltip"
                      data-original-title="Anderw"
                    >
                      <img src="images/resources/userlist-1.jpg" alt="" />
                    </a>
                    <a
                      href="#"
                      title=""
                      data-toggle="tooltip"
                      data-original-title="frank"
                    >
                      <img src="images/resources/userlist-2.jpg" alt="" />
                    </a>
                    <a
                      href="#"
                      title=""
                      data-toggle="tooltip"
                      data-original-title="Sara"
                    >
                      <img src="images/resources/userlist-3.jpg" alt="" />
                    </a>
                    <a
                      href="#"
                      title=""
                      data-toggle="tooltip"
                      data-original-title="Amy"
                    >
                      <img src="images/resources/userlist-4.jpg" alt="" />
                    </a>
                    <a
                      href="#"
                      title=""
                      data-toggle="tooltip"
                      data-original-title="Ema"
                    >
                      <img src="images/resources/userlist-5.jpg" alt="" />
                    </a>
                    <a
                      href="#"
                      title=""
                      data-toggle="tooltip"
                      data-original-title="Sophie"
                    >
                      <img src="images/resources/userlist-6.jpg" alt="" />
                    </a>
                    <a
                      href="#"
                      title=""
                      data-toggle="tooltip"
                      data-original-title="Maria"
                    >
                      <img src="images/resources/userlist-7.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- page like widget --> */}
        <div class="widget">
          <h4 class="widget-title">
            Explor Events{" "}
            <a title="" href="#" class="see-all">
              See All
            </a>
          </h4>
          <div class="rec-events bg-purple">
            <i class="ti-gift"></i>
            <h6>
              <a href="#" title="">
                Ocean Motel good night event in columbia
              </a>
            </h6>
            <img src="images/clock.png" alt="" />
          </div>
          <div class="rec-events bg-blue">
            <i class="ti-microphone"></i>
            <h6>
              <a href="#" title="">
                2016 The 3rd International Conference
              </a>
            </h6>
            <img src="images/clock.png" alt="" />
          </div>
        </div>
        {/* <!-- explore events --> */}
        <div class="widget">
          <div class="post-creat">
            <div class="bg-feature">
              <img src="images/resources/post-createbg.jpg" alt="" />
              <span>Create</span>
            </div>
            <div class="create-meta">
              <img src="images/logo2.png" alt="" />
              <p>
                The Best Post on Pitnik for you, Pulled from the most active
                communities on pitnik. Check here to see the most shared,
                upvoted, and commented content on the internet.
              </p>
              <a class="main-btn2" href="#" title="">
                Create Post
              </a>
            </div>
          </div>
        </div>
        <div class="widget">
          <h4 class="widget-title">Profile intro</h4>
          <ul class="short-profile">
            <li>
              <span>about</span>
              <p>
                Hi, i am jhon kates, i am 32 years old and worked as a web
                developer in microsoft{" "}
              </p>
            </li>
            <li>
              <span>fav tv show</span>
              <p>Sacred Games, Spartcus Blood, Games of Theron </p>
            </li>
            <li>
              <span>favourit music</span>
              <p>Justin Biber, Shakira, Nati Natasah</p>
            </li>
          </ul>
        </div>
        {/* <!-- profile intro widget --> */}
        <div class="widget stick-widget">
          <h4 class="widget-title">
            Recent Links{" "}
            <a title="" href="#" class="see-all">
              See All
            </a>
          </h4>
          <ul class="recent-links">
            <li>
              <figure>
                <img src="images/resources/recentlink-1.jpg" alt="" />
              </figure>
              <div class="re-links-meta">
                <h6>
                  <a href="#" title="">
                    moira's fade reaches much farther than you think.
                  </a>
                </h6>
                <span>2 weeks ago </span>
              </div>
            </li>
            <li>
              <figure>
                <img src="images/resources/recentlink-2.jpg" alt="" />
              </figure>
              <div class="re-links-meta">
                <h6>
                  <a href="#" title="">
                    daniel asks if we want him to do the voice of doomfist
                  </a>
                </h6>
                <span>3 months ago </span>
              </div>
            </li>
            <li>
              <figure>
                <img src="images/resources/recentlink-3.jpg" alt="" />
              </figure>
              <div class="re-links-meta">
                <h6>
                  <a href="#" title="">
                    the pitnik overwatch scandals.
                  </a>
                </h6>
                <span>1 day before</span>
              </div>
            </li>
          </ul>
        </div>
        {/* <!-- recent links --> */}
      </aside>

      {/* <!-- sidebar --> */}
    </SectionContainer>
  );
}
