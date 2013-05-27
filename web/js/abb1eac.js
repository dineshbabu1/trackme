  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>bootstrap-application-wizard/src/bootstrap-wizard.js at master · amoffat/bootstrap-application-wizard</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="1128501" name="octolytics-actor-id" /><meta content="83580fb355ac06118324c4ee4c0aa53c4e56273cf722f01bf6ef1aaabb1f5b1c" name="octolytics-actor-hash" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="W8c5TJel79p1jP4cBcKO2KURxpvIcO+9tW8j/2VbJo8=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-5c7be408fce39b9ed9d174f787c73f1d9e497b50.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-883c2d036f95a0fb486a5d977a84cb0b91a58353.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-92d138f450f2960501e28397a2f63b0f100590f0.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-af722d045ae48a4eaa88da3a9a035a24422643e0.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="181cf070024d3da4f5793e9a2d7b98a5">

        <link data-pjax-transient rel='permalink' href='/amoffat/bootstrap-application-wizard/blob/3b840242e8b325e1c83cedbbf00bb0790478e9c7/src/bootstrap-wizard.js'>
    <meta property="og:title" content="bootstrap-application-wizard"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/amoffat/bootstrap-application-wizard"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/b2205964d196cdba00c7bdbddb7f2f8e?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="Contribute to bootstrap-application-wizard development by creating an account on GitHub."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="amoffat/bootstrap-application-wizard"/>

    <meta name="description" content="Contribute to bootstrap-application-wizard development by creating an account on GitHub." />


    <meta content="259113" name="octolytics-dimension-user_id" /><meta content="8061175" name="octolytics-dimension-repository_id" />
  <link href="https://github.com/amoffat/bootstrap-application-wizard/commits/master.atom" rel="alternate" title="Recent Commits to bootstrap-application-wizard:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public env-production  ">
    <div id="wrapper">

      

      
      
      

      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    <div class="divider-vertical"></div>

      <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="octicon octicon-gear "></span></a>

  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    data-username="ronzalo"
      data-repo="amoffat/bootstrap-application-wizard"
      data-branch="master"
      data-sha="2c8f392cc53177ee39b8cc528706637ea0d6ffc7"
  >

    <input type="hidden" name="nwo" value="amoffat/bootstrap-application-wizard" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

  <div class="divider-vertical"></div>

</form>
        <ul class="top-nav">
            <li class="explore"><a href="https://github.com/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="http://help.github.com">Help</a></li>
        </ul>
      </div>

    

  

    <ul id="user-links">
      <li>
        <a href="https://github.com/ronzalo" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/b6ca43984b11c1ad4e3b1c4125b7a210?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> ronzalo
        </a>
      </li>

        <li>
          <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
            <span class="octicon octicon-repo-create"></span>
          </a>
        </li>

        <li>
          <a href="/settings/profile" id="account_settings"
            class="tooltipped downwards"
            title="Account settings ">
            <span class="octicon octicon-tools"></span>
          </a>
        </li>
        <li>
          <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out">
            <span class="octicon octicon-log-out"></span>
          </a>
        </li>

    </ul>


<div class="js-new-dropdown-contents hidden">
  <ul class="dropdown-menu">
    <li>
      <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
    </li>
    <li>
        <a href="https://github.com/amoffat/bootstrap-application-wizard/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
    <li>
    </li>
    <li>
      <a href="/organizations/new"><span class="octicon octicon-list-unordered"></span> New organization</a>
    </li>
  </ul>
</div>


    
  </div>
</div>

      

      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              

<ul class="pagehead-actions">


    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="W8c5TJel79p1jP4cBcKO2KURxpvIcO+9tW8j/2VbJo8=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="8061175" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder js-menu-content">
        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container on">
      <a href="/amoffat/bootstrap-application-wizard/unstar" class="minibutton js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="octicon octicon-star-delete"></span>
        <span class="text">Unstar</span>
      </a>
      <a href="/amoffat/bootstrap-application-wizard/star" class="minibutton js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="octicon octicon-star"></span>
        <span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/amoffat/bootstrap-application-wizard/stargazers">1,034</a>
    </li>

        <li>
          <a href="/amoffat/bootstrap-application-wizard/fork" class="minibutton js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="facebox nofollow">
            <span class="octicon octicon-git-branch-create"></span>
            <span class="text">Fork</span>
          </a>
          <a href="/amoffat/bootstrap-application-wizard/network" class="social-count">89</a>
        </li>


</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-octicon octicon-repo"></span>
                <span class="author vcard">
                  <a href="/amoffat" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">amoffat</span>
                  </a></span> /
                <strong><a href="/amoffat/bootstrap-application-wizard" class="js-current-repository">bootstrap-application-wizard</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li class="pulse-nav"><a href="/amoffat/bootstrap-application-wizard/pulse" class="js-selected-navigation-item " data-selected-links="pulse /amoffat/bootstrap-application-wizard/pulse" rel="nofollow"><span class="octicon octicon-pulse"></span></a></li>
    <li><a href="/amoffat/bootstrap-application-wizard" class="js-selected-navigation-item selected" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /amoffat/bootstrap-application-wizard">Code</a></li>
    <li><a href="/amoffat/bootstrap-application-wizard/network" class="js-selected-navigation-item " data-selected-links="repo_network /amoffat/bootstrap-application-wizard/network">Network</a></li>
    <li><a href="/amoffat/bootstrap-application-wizard/pulls" class="js-selected-navigation-item " data-selected-links="repo_pulls /amoffat/bootstrap-application-wizard/pulls">Pull Requests <span class='counter'>1</span></a></li>

      <li><a href="/amoffat/bootstrap-application-wizard/issues" class="js-selected-navigation-item " data-selected-links="repo_issues /amoffat/bootstrap-application-wizard/issues">Issues <span class='counter'>10</span></a></li>

      <li><a href="/amoffat/bootstrap-application-wizard/wiki" class="js-selected-navigation-item " data-selected-links="repo_wiki /amoffat/bootstrap-application-wizard/wiki">Wiki</a></li>


    <li><a href="/amoffat/bootstrap-application-wizard/graphs" class="js-selected-navigation-item " data-selected-links="repo_graphs repo_contributors /amoffat/bootstrap-application-wizard/graphs">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/amoffat/bootstrap-application-wizard/tags" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_tags /amoffat/bootstrap-application-wizard/tags">Tags <span class="counter blank">0</span></a></li>
    </ul>
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="octicon octicon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/amoffat/bootstrap-application-wizard/blob/gh-pages/src/bootstrap-wizard.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" rel="nofollow" title="gh-pages">gh-pages</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item selected">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/amoffat/bootstrap-application-wizard/blob/master/src/bootstrap-wizard.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/amoffat/bootstrap-application-wizard" class="selected js-selected-navigation-item tabnav-tab" data-selected-links="repo_source /amoffat/bootstrap-application-wizard">Files</a></li>
    <li><a href="/amoffat/bootstrap-application-wizard/commits/master" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_commits /amoffat/bootstrap-application-wizard/commits/master">Commits</a></li>
    <li><a href="/amoffat/bootstrap-application-wizard/branches" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_branches /amoffat/bootstrap-application-wizard/branches" rel="nofollow">Branches <span class="counter ">2</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:f08e1bede3950791e364596d1510d60f -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:f08e1bede3950791e364596d1510d60f -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/amoffat/bootstrap-application-wizard" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">bootstrap-application-wizard</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/amoffat/bootstrap-application-wizard/tree/master/src" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">src</span></a></span><span class="separator"> / </span><strong class="final-path">bootstrap-wizard.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="src/bootstrap-wizard.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
        </div>

      <a href="/amoffat/bootstrap-application-wizard/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/amoffat/bootstrap-application-wizard/contributors/master/src/bootstrap-wizard.js">
          Fetching contributors…

          <div class="participation">
            <p class="loader-loading"><img alt="Octocat-spinner-32-eaf2f5" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif?1338956357" width="16" /></p>
            <p class="loader-error">Cannot retrieve contributors at this time</p>
          </div>
        </div>

    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/amoffat/bootstrap-application-wizard/blob/3b840242e8b325e1c83cedbbf00bb0790478e9c7/src/bootstrap-wizard.js" data-title="bootstrap-application-wizard/src/bootstrap-wizard.js at master · amoffat/bootstrap-application-wizard · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="octicon octicon-file-text"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>1048 lines (881 sloc)</span>
                <span>25.777 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                        <a class="minibutton tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/amoffat/bootstrap-application-wizard/edit/master/src/bootstrap-wizard.js"
                           data-method="post" rel="nofollow">Edit</a>
                  <a href="/amoffat/bootstrap-application-wizard/raw/master/src/bootstrap-wizard.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/amoffat/bootstrap-application-wizard/blame/master/src/bootstrap-wizard.js" class="button minibutton ">Blame</a>
                  <a href="/amoffat/bootstrap-application-wizard/commits/master/src/bootstrap-wizard.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>
<span id="L807" rel="#L807">807</span>
<span id="L808" rel="#L808">808</span>
<span id="L809" rel="#L809">809</span>
<span id="L810" rel="#L810">810</span>
<span id="L811" rel="#L811">811</span>
<span id="L812" rel="#L812">812</span>
<span id="L813" rel="#L813">813</span>
<span id="L814" rel="#L814">814</span>
<span id="L815" rel="#L815">815</span>
<span id="L816" rel="#L816">816</span>
<span id="L817" rel="#L817">817</span>
<span id="L818" rel="#L818">818</span>
<span id="L819" rel="#L819">819</span>
<span id="L820" rel="#L820">820</span>
<span id="L821" rel="#L821">821</span>
<span id="L822" rel="#L822">822</span>
<span id="L823" rel="#L823">823</span>
<span id="L824" rel="#L824">824</span>
<span id="L825" rel="#L825">825</span>
<span id="L826" rel="#L826">826</span>
<span id="L827" rel="#L827">827</span>
<span id="L828" rel="#L828">828</span>
<span id="L829" rel="#L829">829</span>
<span id="L830" rel="#L830">830</span>
<span id="L831" rel="#L831">831</span>
<span id="L832" rel="#L832">832</span>
<span id="L833" rel="#L833">833</span>
<span id="L834" rel="#L834">834</span>
<span id="L835" rel="#L835">835</span>
<span id="L836" rel="#L836">836</span>
<span id="L837" rel="#L837">837</span>
<span id="L838" rel="#L838">838</span>
<span id="L839" rel="#L839">839</span>
<span id="L840" rel="#L840">840</span>
<span id="L841" rel="#L841">841</span>
<span id="L842" rel="#L842">842</span>
<span id="L843" rel="#L843">843</span>
<span id="L844" rel="#L844">844</span>
<span id="L845" rel="#L845">845</span>
<span id="L846" rel="#L846">846</span>
<span id="L847" rel="#L847">847</span>
<span id="L848" rel="#L848">848</span>
<span id="L849" rel="#L849">849</span>
<span id="L850" rel="#L850">850</span>
<span id="L851" rel="#L851">851</span>
<span id="L852" rel="#L852">852</span>
<span id="L853" rel="#L853">853</span>
<span id="L854" rel="#L854">854</span>
<span id="L855" rel="#L855">855</span>
<span id="L856" rel="#L856">856</span>
<span id="L857" rel="#L857">857</span>
<span id="L858" rel="#L858">858</span>
<span id="L859" rel="#L859">859</span>
<span id="L860" rel="#L860">860</span>
<span id="L861" rel="#L861">861</span>
<span id="L862" rel="#L862">862</span>
<span id="L863" rel="#L863">863</span>
<span id="L864" rel="#L864">864</span>
<span id="L865" rel="#L865">865</span>
<span id="L866" rel="#L866">866</span>
<span id="L867" rel="#L867">867</span>
<span id="L868" rel="#L868">868</span>
<span id="L869" rel="#L869">869</span>
<span id="L870" rel="#L870">870</span>
<span id="L871" rel="#L871">871</span>
<span id="L872" rel="#L872">872</span>
<span id="L873" rel="#L873">873</span>
<span id="L874" rel="#L874">874</span>
<span id="L875" rel="#L875">875</span>
<span id="L876" rel="#L876">876</span>
<span id="L877" rel="#L877">877</span>
<span id="L878" rel="#L878">878</span>
<span id="L879" rel="#L879">879</span>
<span id="L880" rel="#L880">880</span>
<span id="L881" rel="#L881">881</span>
<span id="L882" rel="#L882">882</span>
<span id="L883" rel="#L883">883</span>
<span id="L884" rel="#L884">884</span>
<span id="L885" rel="#L885">885</span>
<span id="L886" rel="#L886">886</span>
<span id="L887" rel="#L887">887</span>
<span id="L888" rel="#L888">888</span>
<span id="L889" rel="#L889">889</span>
<span id="L890" rel="#L890">890</span>
<span id="L891" rel="#L891">891</span>
<span id="L892" rel="#L892">892</span>
<span id="L893" rel="#L893">893</span>
<span id="L894" rel="#L894">894</span>
<span id="L895" rel="#L895">895</span>
<span id="L896" rel="#L896">896</span>
<span id="L897" rel="#L897">897</span>
<span id="L898" rel="#L898">898</span>
<span id="L899" rel="#L899">899</span>
<span id="L900" rel="#L900">900</span>
<span id="L901" rel="#L901">901</span>
<span id="L902" rel="#L902">902</span>
<span id="L903" rel="#L903">903</span>
<span id="L904" rel="#L904">904</span>
<span id="L905" rel="#L905">905</span>
<span id="L906" rel="#L906">906</span>
<span id="L907" rel="#L907">907</span>
<span id="L908" rel="#L908">908</span>
<span id="L909" rel="#L909">909</span>
<span id="L910" rel="#L910">910</span>
<span id="L911" rel="#L911">911</span>
<span id="L912" rel="#L912">912</span>
<span id="L913" rel="#L913">913</span>
<span id="L914" rel="#L914">914</span>
<span id="L915" rel="#L915">915</span>
<span id="L916" rel="#L916">916</span>
<span id="L917" rel="#L917">917</span>
<span id="L918" rel="#L918">918</span>
<span id="L919" rel="#L919">919</span>
<span id="L920" rel="#L920">920</span>
<span id="L921" rel="#L921">921</span>
<span id="L922" rel="#L922">922</span>
<span id="L923" rel="#L923">923</span>
<span id="L924" rel="#L924">924</span>
<span id="L925" rel="#L925">925</span>
<span id="L926" rel="#L926">926</span>
<span id="L927" rel="#L927">927</span>
<span id="L928" rel="#L928">928</span>
<span id="L929" rel="#L929">929</span>
<span id="L930" rel="#L930">930</span>
<span id="L931" rel="#L931">931</span>
<span id="L932" rel="#L932">932</span>
<span id="L933" rel="#L933">933</span>
<span id="L934" rel="#L934">934</span>
<span id="L935" rel="#L935">935</span>
<span id="L936" rel="#L936">936</span>
<span id="L937" rel="#L937">937</span>
<span id="L938" rel="#L938">938</span>
<span id="L939" rel="#L939">939</span>
<span id="L940" rel="#L940">940</span>
<span id="L941" rel="#L941">941</span>
<span id="L942" rel="#L942">942</span>
<span id="L943" rel="#L943">943</span>
<span id="L944" rel="#L944">944</span>
<span id="L945" rel="#L945">945</span>
<span id="L946" rel="#L946">946</span>
<span id="L947" rel="#L947">947</span>
<span id="L948" rel="#L948">948</span>
<span id="L949" rel="#L949">949</span>
<span id="L950" rel="#L950">950</span>
<span id="L951" rel="#L951">951</span>
<span id="L952" rel="#L952">952</span>
<span id="L953" rel="#L953">953</span>
<span id="L954" rel="#L954">954</span>
<span id="L955" rel="#L955">955</span>
<span id="L956" rel="#L956">956</span>
<span id="L957" rel="#L957">957</span>
<span id="L958" rel="#L958">958</span>
<span id="L959" rel="#L959">959</span>
<span id="L960" rel="#L960">960</span>
<span id="L961" rel="#L961">961</span>
<span id="L962" rel="#L962">962</span>
<span id="L963" rel="#L963">963</span>
<span id="L964" rel="#L964">964</span>
<span id="L965" rel="#L965">965</span>
<span id="L966" rel="#L966">966</span>
<span id="L967" rel="#L967">967</span>
<span id="L968" rel="#L968">968</span>
<span id="L969" rel="#L969">969</span>
<span id="L970" rel="#L970">970</span>
<span id="L971" rel="#L971">971</span>
<span id="L972" rel="#L972">972</span>
<span id="L973" rel="#L973">973</span>
<span id="L974" rel="#L974">974</span>
<span id="L975" rel="#L975">975</span>
<span id="L976" rel="#L976">976</span>
<span id="L977" rel="#L977">977</span>
<span id="L978" rel="#L978">978</span>
<span id="L979" rel="#L979">979</span>
<span id="L980" rel="#L980">980</span>
<span id="L981" rel="#L981">981</span>
<span id="L982" rel="#L982">982</span>
<span id="L983" rel="#L983">983</span>
<span id="L984" rel="#L984">984</span>
<span id="L985" rel="#L985">985</span>
<span id="L986" rel="#L986">986</span>
<span id="L987" rel="#L987">987</span>
<span id="L988" rel="#L988">988</span>
<span id="L989" rel="#L989">989</span>
<span id="L990" rel="#L990">990</span>
<span id="L991" rel="#L991">991</span>
<span id="L992" rel="#L992">992</span>
<span id="L993" rel="#L993">993</span>
<span id="L994" rel="#L994">994</span>
<span id="L995" rel="#L995">995</span>
<span id="L996" rel="#L996">996</span>
<span id="L997" rel="#L997">997</span>
<span id="L998" rel="#L998">998</span>
<span id="L999" rel="#L999">999</span>
<span id="L1000" rel="#L1000">1000</span>
<span id="L1001" rel="#L1001">1001</span>
<span id="L1002" rel="#L1002">1002</span>
<span id="L1003" rel="#L1003">1003</span>
<span id="L1004" rel="#L1004">1004</span>
<span id="L1005" rel="#L1005">1005</span>
<span id="L1006" rel="#L1006">1006</span>
<span id="L1007" rel="#L1007">1007</span>
<span id="L1008" rel="#L1008">1008</span>
<span id="L1009" rel="#L1009">1009</span>
<span id="L1010" rel="#L1010">1010</span>
<span id="L1011" rel="#L1011">1011</span>
<span id="L1012" rel="#L1012">1012</span>
<span id="L1013" rel="#L1013">1013</span>
<span id="L1014" rel="#L1014">1014</span>
<span id="L1015" rel="#L1015">1015</span>
<span id="L1016" rel="#L1016">1016</span>
<span id="L1017" rel="#L1017">1017</span>
<span id="L1018" rel="#L1018">1018</span>
<span id="L1019" rel="#L1019">1019</span>
<span id="L1020" rel="#L1020">1020</span>
<span id="L1021" rel="#L1021">1021</span>
<span id="L1022" rel="#L1022">1022</span>
<span id="L1023" rel="#L1023">1023</span>
<span id="L1024" rel="#L1024">1024</span>
<span id="L1025" rel="#L1025">1025</span>
<span id="L1026" rel="#L1026">1026</span>
<span id="L1027" rel="#L1027">1027</span>
<span id="L1028" rel="#L1028">1028</span>
<span id="L1029" rel="#L1029">1029</span>
<span id="L1030" rel="#L1030">1030</span>
<span id="L1031" rel="#L1031">1031</span>
<span id="L1032" rel="#L1032">1032</span>
<span id="L1033" rel="#L1033">1033</span>
<span id="L1034" rel="#L1034">1034</span>
<span id="L1035" rel="#L1035">1035</span>
<span id="L1036" rel="#L1036">1036</span>
<span id="L1037" rel="#L1037">1037</span>
<span id="L1038" rel="#L1038">1038</span>
<span id="L1039" rel="#L1039">1039</span>
<span id="L1040" rel="#L1040">1040</span>
<span id="L1041" rel="#L1041">1041</span>
<span id="L1042" rel="#L1042">1042</span>
<span id="L1043" rel="#L1043">1043</span>
<span id="L1044" rel="#L1044">1044</span>
<span id="L1045" rel="#L1045">1045</span>
<span id="L1046" rel="#L1046">1046</span>
<span id="L1047" rel="#L1047">1047</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm"> * Copyright (C) 2013 Panopta, Andrew Moffat</span></div><div class='line' id='LC3'><span class="cm"> *</span></div><div class='line' id='LC4'><span class="cm"> * Permission is hereby granted, free of charge, to any person obtaining a copy</span></div><div class='line' id='LC5'><span class="cm"> * of this software and associated documentation files (the &quot;Software&quot;), to deal</span></div><div class='line' id='LC6'><span class="cm"> * in the Software without restriction, including without limitation the rights</span></div><div class='line' id='LC7'><span class="cm"> * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell</span></div><div class='line' id='LC8'><span class="cm"> * copies of the Software, and to permit persons to whom the Software is</span></div><div class='line' id='LC9'><span class="cm"> * furnished to do so, subject to the following conditions:</span></div><div class='line' id='LC10'><span class="cm"> *</span></div><div class='line' id='LC11'><span class="cm"> * The above copyright notice and this permission notice shall be included in</span></div><div class='line' id='LC12'><span class="cm"> * all copies or substantial portions of the Software.</span></div><div class='line' id='LC13'><span class="cm"> *</span></div><div class='line' id='LC14'><span class="cm"> * THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR</span></div><div class='line' id='LC15'><span class="cm"> * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,</span></div><div class='line' id='LC16'><span class="cm"> * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE</span></div><div class='line' id='LC17'><span class="cm"> * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER</span></div><div class='line' id='LC18'><span class="cm"> * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,</span></div><div class='line' id='LC19'><span class="cm"> * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE</span></div><div class='line' id='LC20'><span class="cm"> * SOFTWARE.</span></div><div class='line' id='LC21'><span class="cm"> */</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC24'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">wizard</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">args</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC25'>		<span class="k">return</span> <span class="k">new</span> <span class="nx">Wizard</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC26'>	<span class="p">};</span></div><div class='line' id='LC27'><br/></div><div class='line' id='LC28'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">wizard</span><span class="p">.</span><span class="nx">logging</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC29'><br/></div><div class='line' id='LC30'><br/></div><div class='line' id='LC31'>	<span class="nx">WizardCard</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">wizard</span><span class="p">,</span> <span class="nx">card</span><span class="p">,</span> <span class="nx">index</span><span class="p">,</span> <span class="nx">prev</span><span class="p">,</span> <span class="nx">next</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC32'>		<span class="k">this</span><span class="p">.</span><span class="nx">wizard</span> <span class="o">=</span> <span class="nx">wizard</span><span class="p">;</span></div><div class='line' id='LC33'>		<span class="k">this</span><span class="p">.</span><span class="nx">index</span> <span class="o">=</span> <span class="nx">index</span><span class="p">;</span></div><div class='line' id='LC34'>		<span class="k">this</span><span class="p">.</span><span class="nx">prev</span> <span class="o">=</span> <span class="nx">prev</span><span class="p">;</span></div><div class='line' id='LC35'>		<span class="k">this</span><span class="p">.</span><span class="nx">next</span> <span class="o">=</span> <span class="nx">next</span><span class="p">;</span></div><div class='line' id='LC36'>		<span class="k">this</span><span class="p">.</span><span class="nx">el</span> <span class="o">=</span> <span class="nx">card</span><span class="p">;</span></div><div class='line' id='LC37'>		<span class="k">this</span><span class="p">.</span><span class="nx">title</span> <span class="o">=</span> <span class="nx">card</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;h3&quot;</span><span class="p">).</span><span class="nx">first</span><span class="p">().</span><span class="nx">text</span><span class="p">();</span></div><div class='line' id='LC38'>		<span class="k">this</span><span class="p">.</span><span class="nx">name</span> <span class="o">=</span> <span class="nx">card</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s2">&quot;cardname&quot;</span><span class="p">)</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">title</span><span class="p">;</span></div><div class='line' id='LC39'><br/></div><div class='line' id='LC40'>		<span class="k">this</span><span class="p">.</span><span class="nx">nav</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_createNavElement</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">title</span><span class="p">,</span> <span class="nx">index</span><span class="p">);</span></div><div class='line' id='LC41'><br/></div><div class='line' id='LC42'>		<span class="k">this</span><span class="p">.</span><span class="nx">_disabled</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC43'>		<span class="k">this</span><span class="p">.</span><span class="nx">_loaded</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC44'>		<span class="k">this</span><span class="p">.</span><span class="nx">_events</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC45'>	<span class="p">}</span></div><div class='line' id='LC46'><br/></div><div class='line' id='LC47'>	<span class="nx">WizardCard</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'>		<span class="nx">select</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC50'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;selecting&quot;</span><span class="p">);</span></div><div class='line' id='LC51'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">isSelected</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC52'>				<span class="k">this</span><span class="p">.</span><span class="nx">nav</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s2">&quot;active&quot;</span><span class="p">);</span></div><div class='line' id='LC53'>				<span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">show</span><span class="p">();</span></div><div class='line' id='LC54'><br/></div><div class='line' id='LC55'>				<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">_loaded</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC56'>					<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;loaded&quot;</span><span class="p">);</span></div><div class='line' id='LC57'>					<span class="k">this</span><span class="p">.</span><span class="nx">reload</span><span class="p">();</span></div><div class='line' id='LC58'>				<span class="p">}</span></div><div class='line' id='LC59'><br/></div><div class='line' id='LC60'>				<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;selected&quot;</span><span class="p">);</span></div><div class='line' id='LC61'>			<span class="p">}</span></div><div class='line' id='LC62'><br/></div><div class='line' id='LC63'><br/></div><div class='line' id='LC64'>			<span class="cm">/*</span></div><div class='line' id='LC65'><span class="cm">			 * this is ugly, but we&#39;re handling the changing of the wizard&#39;s</span></div><div class='line' id='LC66'><span class="cm">			 * buttons here, in the WizardCard select.  so when a card is</span></div><div class='line' id='LC67'><span class="cm">			 * selected, we&#39;re figuring out if we&#39;re the first card or the</span></div><div class='line' id='LC68'><span class="cm">			 * last card and changing the wizard&#39;s buttons via the guts of</span></div><div class='line' id='LC69'><span class="cm">			 * the wizard</span></div><div class='line' id='LC70'><span class="cm">			 *</span></div><div class='line' id='LC71'><span class="cm">			 * ideally this logic should be encapsulated by some wizard methods</span></div><div class='line' id='LC72'><span class="cm">			 * that we can call from here, instead of messing with the guts</span></div><div class='line' id='LC73'><span class="cm">			 */</span></div><div class='line' id='LC74'>			<span class="kd">var</span> <span class="nx">w</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">wizard</span><span class="p">;</span></div><div class='line' id='LC75'>			<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">index</span> <span class="o">&gt;=</span> <span class="nx">w</span><span class="p">.</span><span class="nx">_cards</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC76'>				<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;on last card, changing next button to submit&quot;</span><span class="p">);</span></div><div class='line' id='LC77'><br/></div><div class='line' id='LC78'>				<span class="nx">w</span><span class="p">.</span><span class="nx">changeNextButton</span><span class="p">(</span><span class="nx">w</span><span class="p">.</span><span class="nx">args</span><span class="p">.</span><span class="nx">buttons</span><span class="p">.</span><span class="nx">submitText</span><span class="p">,</span> <span class="s2">&quot;btn-success&quot;</span><span class="p">);</span></div><div class='line' id='LC79'>				<span class="nx">w</span><span class="p">.</span><span class="nx">_readyToSubmit</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC80'>				<span class="nx">w</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;readySubmit&quot;</span><span class="p">);</span></div><div class='line' id='LC81'>			<span class="p">}</span></div><div class='line' id='LC82'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC83'>				<span class="nx">w</span><span class="p">.</span><span class="nx">_readyToSubmit</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC84'>				<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">index</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC85'>					<span class="nx">w</span><span class="p">.</span><span class="nx">backButton</span><span class="p">.</span><span class="nx">toggleClass</span><span class="p">(</span><span class="s2">&quot;disabled&quot;</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC86'>				<span class="p">}</span></div><div class='line' id='LC87'>				<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC88'>					<span class="nx">w</span><span class="p">.</span><span class="nx">backButton</span><span class="p">.</span><span class="nx">toggleClass</span><span class="p">(</span><span class="s2">&quot;disabled&quot;</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC89'>				<span class="p">}</span></div><div class='line' id='LC90'>				<span class="nx">w</span><span class="p">.</span><span class="nx">changeNextButton</span><span class="p">(</span><span class="nx">w</span><span class="p">.</span><span class="nx">args</span><span class="p">.</span><span class="nx">buttons</span><span class="p">.</span><span class="nx">nextText</span><span class="p">,</span> <span class="s2">&quot;btn-primary&quot;</span><span class="p">);</span></div><div class='line' id='LC91'>			<span class="p">}</span></div><div class='line' id='LC92'><br/></div><div class='line' id='LC93'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC94'>		<span class="p">},</span></div><div class='line' id='LC95'><br/></div><div class='line' id='LC96'>		<span class="c1">// &lt;li&gt;&lt;a href=&quot;#&quot; data-navindex=&quot;0&quot;&gt;</span></div><div class='line' id='LC97'>		<span class="c1">//     &lt;i class=&quot;icon-chevron-right&quot;&gt;&lt;/i&gt;</span></div><div class='line' id='LC98'>		<span class="c1">//     Name &amp;amp; FQDN</span></div><div class='line' id='LC99'>		<span class="c1">// &lt;/a&gt;&lt;/li&gt;</span></div><div class='line' id='LC100'>		<span class="nx">_createNavElement</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">i</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC101'>			<span class="kd">var</span> <span class="nx">li</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;li class=&quot;wizard-nav-item&quot;&gt;&lt;/li&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC102'>			<span class="kd">var</span> <span class="nx">a</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;a class=&quot;wizard-nav-link&quot;&gt;&lt;/a&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC103'>			<span class="nx">a</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s2">&quot;navindex&quot;</span><span class="p">,</span> <span class="nx">i</span><span class="p">);</span></div><div class='line' id='LC104'>			<span class="nx">li</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span></div><div class='line' id='LC105'>			<span class="nx">a</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="s1">&#39;&lt;i class=&quot;icon-chevron-right&quot;&gt;&lt;/i&gt;&#39;</span><span class="p">)</span></div><div class='line' id='LC106'>			<span class="nx">a</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">name</span><span class="p">);</span></div><div class='line' id='LC107'>			<span class="k">return</span> <span class="nx">li</span><span class="p">;</span></div><div class='line' id='LC108'>		<span class="p">},</span></div><div class='line' id='LC109'><br/></div><div class='line' id='LC110'>		<span class="nx">markVisited</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC111'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;marking as visited&quot;</span><span class="p">);</span></div><div class='line' id='LC112'>			<span class="k">this</span><span class="p">.</span><span class="nx">nav</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s2">&quot;already-visited&quot;</span><span class="p">);</span></div><div class='line' id='LC113'>			<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;markVisited&quot;</span><span class="p">);</span></div><div class='line' id='LC114'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC115'>		<span class="p">},</span></div><div class='line' id='LC116'><br/></div><div class='line' id='LC117'>		<span class="nx">unmarkVisited</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC118'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;unmarking as visited&quot;</span><span class="p">);</span></div><div class='line' id='LC119'>			<span class="k">this</span><span class="p">.</span><span class="nx">nav</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="s2">&quot;already-visited&quot;</span><span class="p">);</span></div><div class='line' id='LC120'>			<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;unmarkVisited&quot;</span><span class="p">);</span></div><div class='line' id='LC121'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC122'>		<span class="p">},</span></div><div class='line' id='LC123'><br/></div><div class='line' id='LC124'>		<span class="nx">deselect</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC125'>			<span class="k">this</span><span class="p">.</span><span class="nx">nav</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="s2">&quot;active&quot;</span><span class="p">);</span></div><div class='line' id='LC126'>			<span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC127'>			<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;deselect&quot;</span><span class="p">);</span></div><div class='line' id='LC128'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC129'>		<span class="p">},</span></div><div class='line' id='LC130'><br/></div><div class='line' id='LC131'>		<span class="nx">enable</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC132'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;enabling&quot;</span><span class="p">);</span></div><div class='line' id='LC133'>			<span class="k">this</span><span class="p">.</span><span class="nx">nav</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s2">&quot;active&quot;</span><span class="p">);</span></div><div class='line' id='LC134'>			<span class="k">this</span><span class="p">.</span><span class="nx">_disabled</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC135'>			<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;enabled&quot;</span><span class="p">);</span></div><div class='line' id='LC136'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC137'>		<span class="p">},</span></div><div class='line' id='LC138'><br/></div><div class='line' id='LC139'>		<span class="nx">disable</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">hideCard</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC140'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;disabling&quot;</span><span class="p">);</span></div><div class='line' id='LC141'>			<span class="k">this</span><span class="p">.</span><span class="nx">_disabled</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC142'>			<span class="k">this</span><span class="p">.</span><span class="nx">nav</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="s2">&quot;active already-visited&quot;</span><span class="p">);</span></div><div class='line' id='LC143'>			<span class="k">if</span> <span class="p">(</span><span class="nx">hideCard</span><span class="p">)</span> <span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">hide</span><span class="p">();}</span></div><div class='line' id='LC144'>			<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;disabled&quot;</span><span class="p">);</span></div><div class='line' id='LC145'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC146'>		<span class="p">},</span></div><div class='line' id='LC147'><br/></div><div class='line' id='LC148'>		<span class="nx">isDisabled</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC149'>			<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">_disabled</span><span class="p">;</span></div><div class='line' id='LC150'>		<span class="p">},</span></div><div class='line' id='LC151'><br/></div><div class='line' id='LC152'>		<span class="nx">alreadyVisited</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC153'>			<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">nav</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="s2">&quot;already-visited&quot;</span><span class="p">);</span></div><div class='line' id='LC154'>		<span class="p">},</span></div><div class='line' id='LC155'><br/></div><div class='line' id='LC156'>		<span class="nx">isSelected</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC157'>			<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">nav</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="s2">&quot;active&quot;</span><span class="p">);</span></div><div class='line' id='LC158'>		<span class="p">},</span></div><div class='line' id='LC159'><br/></div><div class='line' id='LC160'>		<span class="nx">reload</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC161'>			<span class="k">this</span><span class="p">.</span><span class="nx">_loaded</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC162'>			<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;reload&quot;</span><span class="p">);</span></div><div class='line' id='LC163'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC164'>		<span class="p">},</span></div><div class='line' id='LC165'><br/></div><div class='line' id='LC166'>		<span class="nx">on</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC167'>			<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">wizard</span><span class="p">.</span><span class="nx">on</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC168'>		<span class="p">},</span></div><div class='line' id='LC169'><br/></div><div class='line' id='LC170'>		<span class="nx">trigger</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC171'>			<span class="k">this</span><span class="p">.</span><span class="nx">callListener</span><span class="p">(</span><span class="s2">&quot;on&quot;</span><span class="o">+</span><span class="nx">arguments</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span></div><div class='line' id='LC172'>			<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">wizard</span><span class="p">.</span><span class="nx">trigger</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC173'>		<span class="p">},</span></div><div class='line' id='LC174'><br/></div><div class='line' id='LC175'>		<span class="cm">/*</span></div><div class='line' id='LC176'><span class="cm">		 * displays an alert box on the current card</span></div><div class='line' id='LC177'><span class="cm">		 */</span></div><div class='line' id='LC178'>		<span class="nx">toggleAlert</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">msg</span><span class="p">,</span> <span class="nx">toggle</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC179'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;toggling alert to: &quot;</span> <span class="o">+</span> <span class="nx">toggle</span><span class="p">);</span></div><div class='line' id='LC180'><br/></div><div class='line' id='LC181'>			<span class="nx">toggle</span> <span class="o">=</span> <span class="k">typeof</span><span class="p">(</span><span class="nx">toggle</span><span class="p">)</span> <span class="o">==</span> <span class="s2">&quot;undefined&quot;</span> <span class="o">?</span> <span class="kc">true</span> <span class="o">:</span> <span class="nx">toggle</span><span class="p">;</span></div><div class='line' id='LC182'><br/></div><div class='line' id='LC183'>			<span class="k">if</span> <span class="p">(</span><span class="nx">toggle</span><span class="p">)</span> <span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;showAlert&quot;</span><span class="p">);}</span></div><div class='line' id='LC184'>			<span class="k">else</span> <span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;hideAlert&quot;</span><span class="p">);}</span></div><div class='line' id='LC185'><br/></div><div class='line' id='LC186'>			<span class="kd">var</span> <span class="nx">div</span><span class="p">;</span></div><div class='line' id='LC187'>			<span class="kd">var</span> <span class="nx">alert</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">children</span><span class="p">(</span><span class="s2">&quot;h3&quot;</span><span class="p">).</span><span class="nx">first</span><span class="p">().</span><span class="nx">next</span><span class="p">(</span><span class="s2">&quot;div.alert&quot;</span><span class="p">);</span></div><div class='line' id='LC188'><br/></div><div class='line' id='LC189'>			<span class="k">if</span> <span class="p">(</span><span class="nx">alert</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC190'>				<span class="cm">/*</span></div><div class='line' id='LC191'><span class="cm">				 * we&#39;re hiding anyways, so no need to create anything.</span></div><div class='line' id='LC192'><span class="cm">				 * we&#39;ll do that if we ever are actually showing the alert</span></div><div class='line' id='LC193'><span class="cm">				 */</span></div><div class='line' id='LC194'>				<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">toggle</span><span class="p">)</span> <span class="p">{</span><span class="k">return</span> <span class="k">this</span><span class="p">;}</span></div><div class='line' id='LC195'><br/></div><div class='line' id='LC196'>				<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;couldn&#39;t find existing alert div, creating one&quot;</span><span class="p">);</span></div><div class='line' id='LC197'>				<span class="nx">div</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s2">&quot;&lt;div /&gt;&quot;</span><span class="p">);</span></div><div class='line' id='LC198'>				<span class="nx">div</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s2">&quot;alert&quot;</span><span class="p">);</span></div><div class='line' id='LC199'>				<span class="nx">div</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s2">&quot;hide&quot;</span><span class="p">);</span></div><div class='line' id='LC200'>				<span class="nx">div</span><span class="p">.</span><span class="nx">insertAfter</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;h3&quot;</span><span class="p">).</span><span class="nx">first</span><span class="p">());</span></div><div class='line' id='LC201'>			<span class="p">}</span></div><div class='line' id='LC202'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC203'>				<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;found existing alert div&quot;</span><span class="p">);</span></div><div class='line' id='LC204'>				<span class="nx">div</span> <span class="o">=</span> <span class="nx">alert</span><span class="p">.</span><span class="nx">first</span><span class="p">();</span></div><div class='line' id='LC205'>			<span class="p">}</span></div><div class='line' id='LC206'><br/></div><div class='line' id='LC207'>			<span class="k">if</span> <span class="p">(</span><span class="nx">toggle</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC208'>				<span class="k">if</span> <span class="p">(</span><span class="nx">msg</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC209'>					<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;setting alert msg to&quot;</span><span class="p">,</span> <span class="nx">msg</span><span class="p">);</span></div><div class='line' id='LC210'>					<span class="nx">div</span><span class="p">.</span><span class="nx">html</span><span class="p">(</span><span class="nx">msg</span><span class="p">);</span></div><div class='line' id='LC211'>				<span class="p">}</span></div><div class='line' id='LC212'>				<span class="nx">div</span><span class="p">.</span><span class="nx">show</span><span class="p">();</span></div><div class='line' id='LC213'>			<span class="p">}</span></div><div class='line' id='LC214'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC215'>				<span class="nx">div</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC216'>			<span class="p">}</span></div><div class='line' id='LC217'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC218'>		<span class="p">},</span></div><div class='line' id='LC219'><br/></div><div class='line' id='LC220'>		<span class="cm">/*</span></div><div class='line' id='LC221'><span class="cm">		 * this looks for event handlers embedded into the html of the</span></div><div class='line' id='LC222'><span class="cm">		 * wizard card itself, in the form of a data- attribute</span></div><div class='line' id='LC223'><span class="cm">		 */</span></div><div class='line' id='LC224'>		<span class="nx">callListener</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// a bug(?) in jquery..can&#39;t access data-&lt;name&gt; if name is camelCase</span></div><div class='line' id='LC226'>		    <span class="nx">name</span> <span class="o">=</span> <span class="nx">name</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC227'><br/></div><div class='line' id='LC228'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;looking for listener &quot;</span> <span class="o">+</span> <span class="nx">name</span><span class="p">);</span></div><div class='line' id='LC229'>			<span class="kd">var</span> <span class="nx">listener</span> <span class="o">=</span> <span class="nb">window</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="nx">name</span><span class="p">)];</span></div><div class='line' id='LC230'>			<span class="k">if</span> <span class="p">(</span><span class="nx">listener</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC231'>				<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;calling listener &quot;</span> <span class="o">+</span> <span class="nx">name</span><span class="p">);</span></div><div class='line' id='LC232'>				<span class="kd">var</span> <span class="nx">wizard</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">wizard</span><span class="p">;</span></div><div class='line' id='LC233'><br/></div><div class='line' id='LC234'>				<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC235'>					<span class="kd">var</span> <span class="nx">vret</span> <span class="o">=</span> <span class="nx">listener</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC236'>				<span class="p">}</span></div><div class='line' id='LC237'>				<span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC238'>					<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;exception calling listener &quot;</span> <span class="o">+</span> <span class="nx">name</span> <span class="o">+</span> <span class="s2">&quot;: &quot;</span><span class="p">,</span> <span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC239'>				<span class="p">}</span></div><div class='line' id='LC240'>			<span class="p">}</span></div><div class='line' id='LC241'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC242'>				<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;didn&#39;t find listener &quot;</span> <span class="o">+</span> <span class="nx">name</span><span class="p">);</span></div><div class='line' id='LC243'>			<span class="p">}</span></div><div class='line' id='LC244'>		<span class="p">},</span></div><div class='line' id='LC245'><br/></div><div class='line' id='LC246'>		<span class="nx">problem</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">toggle</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC247'>			<span class="k">this</span><span class="p">.</span><span class="nx">nav</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;a&quot;</span><span class="p">).</span><span class="nx">toggleClass</span><span class="p">(</span><span class="s2">&quot;wizard-step-error&quot;</span><span class="p">,</span> <span class="nx">toggle</span><span class="p">);</span></div><div class='line' id='LC248'>		<span class="p">},</span></div><div class='line' id='LC249'><br/></div><div class='line' id='LC250'>		<span class="nx">validate</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC251'>			<span class="kd">var</span> <span class="nx">failures</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC252'>			<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC253'><br/></div><div class='line' id='LC254'>			<span class="cm">/*</span></div><div class='line' id='LC255'><span class="cm">			 * run all the validators embedded on the inputs themselves</span></div><div class='line' id='LC256'><span class="cm">			 */</span></div><div class='line' id='LC257'>			<span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;[data-validate]&quot;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">el</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC258'>				<span class="nx">self</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;validating individiual inputs&quot;</span><span class="p">);</span></div><div class='line' id='LC259'>				<span class="nx">el</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">el</span><span class="p">);</span></div><div class='line' id='LC260'><br/></div><div class='line' id='LC261'>				<span class="kd">var</span> <span class="nx">v</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s2">&quot;validate&quot;</span><span class="p">);</span></div><div class='line' id='LC262'>				<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">v</span><span class="p">)</span> <span class="p">{</span><span class="k">return</span><span class="p">;}</span></div><div class='line' id='LC263'><br/></div><div class='line' id='LC264'>				<span class="kd">var</span> <span class="nx">ret</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC265'>					<span class="nx">status</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC266'>					<span class="nx">title</span><span class="o">:</span> <span class="s2">&quot;Error&quot;</span><span class="p">,</span></div><div class='line' id='LC267'>					<span class="nx">msg</span><span class="o">:</span> <span class="s2">&quot;&quot;</span></div><div class='line' id='LC268'>				<span class="p">};</span></div><div class='line' id='LC269'><br/></div><div class='line' id='LC270'>				<span class="kd">var</span> <span class="nx">vret</span> <span class="o">=</span> <span class="nb">window</span><span class="p">[</span><span class="nx">v</span><span class="p">](</span><span class="nx">el</span><span class="p">);</span></div><div class='line' id='LC271'>				<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">ret</span><span class="p">,</span> <span class="nx">vret</span><span class="p">);</span></div><div class='line' id='LC272'><br/></div><div class='line' id='LC273'>				<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">ret</span><span class="p">.</span><span class="nx">status</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC274'>					<span class="nx">failures</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC275'>					<span class="nx">el</span><span class="p">.</span><span class="nx">parent</span><span class="p">(</span><span class="s2">&quot;.control-group&quot;</span><span class="p">).</span><span class="nx">toggleClass</span><span class="p">(</span><span class="s2">&quot;error&quot;</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC276'>					<span class="nx">self</span><span class="p">.</span><span class="nx">wizard</span><span class="p">.</span><span class="nx">errorPopover</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">ret</span><span class="p">.</span><span class="nx">msg</span><span class="p">);</span></div><div class='line' id='LC277'>				<span class="p">}</span></div><div class='line' id='LC278'>				<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC279'>					<span class="nx">el</span><span class="p">.</span><span class="nx">parent</span><span class="p">(</span><span class="s2">&quot;.control-group&quot;</span><span class="p">).</span><span class="nx">toggleClass</span><span class="p">(</span><span class="s2">&quot;error&quot;</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC280'>					<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC281'>						<span class="nx">el</span><span class="p">.</span><span class="nx">popover</span><span class="p">(</span><span class="s2">&quot;destroy&quot;</span><span class="p">);</span></div><div class='line' id='LC282'>					<span class="p">}</span></div><div class='line' id='LC283'>					<span class="cm">/*</span></div><div class='line' id='LC284'><span class="cm">					 * older versions of bootstrap don&#39;t have a destroy call</span></div><div class='line' id='LC285'><span class="cm">					 * for popovers</span></div><div class='line' id='LC286'><span class="cm">					 */</span></div><div class='line' id='LC287'>					<span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC288'>						<span class="nx">el</span><span class="p">.</span><span class="nx">popover</span><span class="p">(</span><span class="s2">&quot;hide&quot;</span><span class="p">);</span></div><div class='line' id='LC289'>					<span class="p">}</span></div><div class='line' id='LC290'>				<span class="p">}</span></div><div class='line' id='LC291'>			<span class="p">});</span></div><div class='line' id='LC292'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;after validating inputs, failures is&quot;</span><span class="p">,</span> <span class="nx">failures</span><span class="p">);</span></div><div class='line' id='LC293'><br/></div><div class='line' id='LC294'>			<span class="cm">/*</span></div><div class='line' id='LC295'><span class="cm">			 * run the validator embedded in the card</span></div><div class='line' id='LC296'><span class="cm">			 */</span></div><div class='line' id='LC297'>			<span class="kd">var</span> <span class="nx">cardValidator</span> <span class="o">=</span> <span class="nb">window</span><span class="p">[</span><span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s2">&quot;validate&quot;</span><span class="p">)];</span></div><div class='line' id='LC298'>			<span class="k">if</span> <span class="p">(</span><span class="nx">cardValidator</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC299'>				<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;running html-embedded card validator&quot;</span><span class="p">);</span></div><div class='line' id='LC300'>				<span class="kd">var</span> <span class="nx">cardValidated</span> <span class="o">=</span> <span class="nx">cardValidator</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC301'>				<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">cardValidated</span><span class="p">)</span> <span class="o">==</span> <span class="s2">&quot;undefined&quot;</span> <span class="o">||</span> <span class="nx">cardValidated</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC302'>					<span class="nx">cardValidated</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC303'>				<span class="p">}</span></div><div class='line' id='LC304'>				<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">cardValidated</span><span class="p">)</span> <span class="nx">failures</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC305'>				<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;after running html-embedded card validator, failures\</span></div><div class='line' id='LC306'><span class="s2"> is&quot;</span><span class="p">,</span> <span class="nx">failures</span><span class="p">);</span></div><div class='line' id='LC307'>			<span class="p">}</span></div><div class='line' id='LC308'><br/></div><div class='line' id='LC309'>			<span class="cm">/*</span></div><div class='line' id='LC310'><span class="cm">			 * run the validate listener</span></div><div class='line' id='LC311'><span class="cm">			 */</span></div><div class='line' id='LC312'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;running listener validator&quot;</span><span class="p">);</span></div><div class='line' id='LC313'>			<span class="kd">var</span> <span class="nx">listenerValidated</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;validate&quot;</span><span class="p">);</span></div><div class='line' id='LC314'>			<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">listenerValidated</span><span class="p">)</span> <span class="o">==</span> <span class="s2">&quot;undefined&quot;</span> <span class="o">||</span> <span class="nx">listenerValidated</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC315'>				<span class="nx">listenerValidated</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC316'>			<span class="p">}</span></div><div class='line' id='LC317'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">listenerValidated</span><span class="p">)</span> <span class="nx">failures</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC318'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;after running listener validator, failures is&quot;</span><span class="p">,</span> <span class="nx">failures</span><span class="p">);</span></div><div class='line' id='LC319'><br/></div><div class='line' id='LC320'>			<span class="kd">var</span> <span class="nx">validated</span> <span class="o">=</span> <span class="o">!</span><span class="nx">failures</span><span class="p">;</span></div><div class='line' id='LC321'>			<span class="k">if</span> <span class="p">(</span><span class="nx">validated</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC322'>				<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;validated, calling listeners&quot;</span><span class="p">);</span></div><div class='line' id='LC323'>				<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;validated&quot;</span><span class="p">);</span></div><div class='line' id='LC324'>			<span class="p">}</span></div><div class='line' id='LC325'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC326'>				<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;invalid&quot;</span><span class="p">);</span></div><div class='line' id='LC327'>				<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;invalid&quot;</span><span class="p">);</span></div><div class='line' id='LC328'>			<span class="p">}</span></div><div class='line' id='LC329'>			<span class="k">return</span> <span class="nx">validated</span><span class="p">;</span></div><div class='line' id='LC330'>		<span class="p">},</span></div><div class='line' id='LC331'><br/></div><div class='line' id='LC332'>		<span class="nx">log</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC333'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">console</span> <span class="o">||</span> <span class="o">!</span><span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">wizard</span><span class="p">.</span><span class="nx">logging</span><span class="p">)</span> <span class="p">{</span><span class="k">return</span><span class="p">;}</span></div><div class='line' id='LC334'>			<span class="kd">var</span> <span class="nx">prepend</span> <span class="o">=</span> <span class="s2">&quot;card &#39;&quot;</span><span class="o">+</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot;&#39;: &quot;</span><span class="p">;</span></div><div class='line' id='LC335'>			<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="p">[</span><span class="nx">prepend</span><span class="p">];</span></div><div class='line' id='LC336'>			<span class="nx">args</span><span class="p">.</span><span class="nx">push</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">args</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC337'><br/></div><div class='line' id='LC338'>			<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">console</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC339'>		<span class="p">},</span></div><div class='line' id='LC340'><br/></div><div class='line' id='LC341'>		<span class="nx">isActive</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC342'>			<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">nav</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="s2">&quot;active&quot;</span><span class="p">);</span></div><div class='line' id='LC343'>		<span class="p">},</span></div><div class='line' id='LC344'>	<span class="p">};</span></div><div class='line' id='LC345'><br/></div><div class='line' id='LC346'><br/></div><div class='line' id='LC347'>	<span class="nx">Wizard</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">markup</span><span class="p">,</span> <span class="nx">args</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC348'>		<span class="kd">var</span> <span class="nx">wizard_template</span> <span class="o">=</span> <span class="p">[</span></div><div class='line' id='LC349'>			<span class="s1">&#39;&lt;div class=&quot;modal hide wizard-modal&quot; role=&quot;dialog&quot;&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC350'>				<span class="s1">&#39;&lt;div class=&quot;wizard-modal-header modal-header&quot;&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC351'>					<span class="s1">&#39;&lt;button class=&quot;wizard-close close&quot; type=&quot;button&quot;&gt;x&lt;/button&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC352'>					<span class="s1">&#39;&lt;h3 class=&quot;wizard-title&quot;&gt;&lt;/h3&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC353'>					<span class="s1">&#39;&lt;span class=&quot;wizard-subtitle&quot;&gt;&lt;/span&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC354'>				<span class="s1">&#39;&lt;/div&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC355'>				<span class="s1">&#39;&lt;div class=&quot;pull-left wizard-steps&quot;&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC356'>					<span class="s1">&#39;&lt;div class=&quot;wizard-nav-container&quot;&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC357'>						<span class="s1">&#39;&lt;ul class=&quot;nav nav-list&quot; style=&quot;padding-bottom:30px;&quot;&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC358'>						<span class="s1">&#39;&lt;/ul&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC359'>					<span class="s1">&#39;&lt;/div&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC360'><br/></div><div class='line' id='LC361'>					<span class="s1">&#39;&lt;div class=&quot;wizard-progress-container&quot;&gt;&#39;</span><span class="p">,,</span></div><div class='line' id='LC362'>						<span class="s1">&#39;&lt;div class=&quot;progress progress-striped&quot;&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC363'>							<span class="s1">&#39;&lt;div class=&quot;bar&quot;&gt;&lt;/div&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC364'>						<span class="s1">&#39;&lt;/div&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC365'>					<span class="s1">&#39;&lt;/div&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC366'><br/></div><div class='line' id='LC367'>				<span class="s1">&#39;&lt;/div&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC368'><br/></div><div class='line' id='LC369'>				<span class="s1">&#39;&lt;form&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC370'>					<span class="s1">&#39;&lt;div class=&quot;wizard-cards&quot;&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC371'>						<span class="s1">&#39;&lt;div class=&quot;wizard-card-container&quot;&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC372'>						<span class="s1">&#39;&lt;/div&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC373'>						<span class="s1">&#39;&lt;div class=&quot;wizard-modal-footer&quot;&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC374'>							<span class="s1">&#39;&lt;div class=&quot;wizard-buttons-container&quot;&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC375'>								<span class="s1">&#39;&lt;button class=&quot;btn wizard-back&quot; type=&quot;button&quot;&gt;Back&lt;/button&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC376'>								<span class="s1">&#39;&lt;button class=&quot;btn btn-primary wizard-next&quot; type=&quot;button&quot;&gt;Next&lt;/button&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC377'>							<span class="s1">&#39;&lt;/div&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC378'>						<span class="s1">&#39;&lt;/div&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC379'>					<span class="s1">&#39;&lt;/div&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC380'>				<span class="s1">&#39;&lt;/form&gt;&#39;</span><span class="p">,</span></div><div class='line' id='LC381'>			<span class="s1">&#39;&lt;/div&gt;&#39;</span></div><div class='line' id='LC382'>		<span class="p">];</span></div><div class='line' id='LC383'><br/></div><div class='line' id='LC384'>		<span class="k">this</span><span class="p">.</span><span class="nx">args</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC385'>			<span class="nx">submitUrl</span><span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">,</span></div><div class='line' id='LC386'>			<span class="nx">width</span><span class="o">:</span> <span class="mi">750</span><span class="p">,</span></div><div class='line' id='LC387'>			<span class="nx">progressBarCurrent</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC388'>			<span class="nx">increaseHeight</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC389'>			<span class="nx">buttons</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC390'>				<span class="nx">nextText</span><span class="o">:</span> <span class="s2">&quot;Next&quot;</span><span class="p">,</span></div><div class='line' id='LC391'>				<span class="nx">backText</span><span class="o">:</span> <span class="s2">&quot;Back&quot;</span><span class="p">,</span></div><div class='line' id='LC392'>				<span class="nx">submitText</span><span class="o">:</span> <span class="s2">&quot;Submit&quot;</span><span class="p">,</span></div><div class='line' id='LC393'>				<span class="nx">submittingText</span><span class="o">:</span> <span class="s2">&quot;Submitting...&quot;</span><span class="p">,</span></div><div class='line' id='LC394'>			<span class="p">}</span></div><div class='line' id='LC395'>		<span class="p">};</span></div><div class='line' id='LC396'>		<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">args</span><span class="p">,</span> <span class="nx">args</span> <span class="o">||</span> <span class="p">{});</span></div><div class='line' id='LC397'><br/></div><div class='line' id='LC398'>		<span class="k">this</span><span class="p">.</span><span class="nx">markup</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">markup</span><span class="p">);</span></div><div class='line' id='LC399'>		<span class="k">this</span><span class="p">.</span><span class="nx">submitCards</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">markup</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.wizard-error,.wizard-failure,\</span></div><div class='line' id='LC400'><span class="s2">.wizard-success,.wizard-loading&quot;</span><span class="p">);</span></div><div class='line' id='LC401'>		<span class="k">this</span><span class="p">.</span><span class="nx">el</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">wizard_template</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;\n&quot;</span><span class="p">));</span></div><div class='line' id='LC402'>		<span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.wizard-card-container&quot;</span><span class="p">)</span></div><div class='line' id='LC403'>			<span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">markup</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.wizard-card&quot;</span><span class="p">))</span></div><div class='line' id='LC404'>			<span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">submitCards</span><span class="p">);</span></div><div class='line' id='LC405'>		<span class="nx">$</span><span class="p">(</span><span class="s2">&quot;body&quot;</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">);</span></div><div class='line' id='LC406'><br/></div><div class='line' id='LC407'>		<span class="k">this</span><span class="p">.</span><span class="nx">closeButton</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;button.wizard-close&quot;</span><span class="p">);</span></div><div class='line' id='LC408'>		<span class="k">this</span><span class="p">.</span><span class="nx">footer</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.wizard-modal-footer&quot;</span><span class="p">);</span></div><div class='line' id='LC409'>		<span class="k">this</span><span class="p">.</span><span class="nx">backButton</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">footer</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.wizard-back&quot;</span><span class="p">);</span></div><div class='line' id='LC410'>		<span class="k">this</span><span class="p">.</span><span class="nx">nextButton</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">footer</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.wizard-next&quot;</span><span class="p">);</span></div><div class='line' id='LC411'>		<span class="k">this</span><span class="p">.</span><span class="nx">progress</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.progress&quot;</span><span class="p">);</span></div><div class='line' id='LC412'>		<span class="k">this</span><span class="p">.</span><span class="nx">_cards</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC413'>		<span class="k">this</span><span class="p">.</span><span class="nx">cards</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC414'>		<span class="k">this</span><span class="p">.</span><span class="nx">_readyToSubmit</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC415'>		<span class="k">this</span><span class="p">.</span><span class="nx">percentComplete</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC416'>		<span class="k">this</span><span class="p">.</span><span class="nx">_submitting</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC417'>		<span class="k">this</span><span class="p">.</span><span class="nx">_events</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC418'>		<span class="k">this</span><span class="p">.</span><span class="nx">_firstShow</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC419'><br/></div><div class='line' id='LC420'><br/></div><div class='line' id='LC421'>		<span class="c1">// construction</span></div><div class='line' id='LC422'><br/></div><div class='line' id='LC423'><br/></div><div class='line' id='LC424'>		<span class="k">this</span><span class="p">.</span><span class="nx">_createCards</span><span class="p">();</span></div><div class='line' id='LC425'><br/></div><div class='line' id='LC426'>		<span class="k">this</span><span class="p">.</span><span class="nx">nextButton</span><span class="p">.</span><span class="nx">click</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_handleNextClick</span><span class="p">);</span></div><div class='line' id='LC427'>		<span class="k">this</span><span class="p">.</span><span class="nx">backButton</span><span class="p">.</span><span class="nx">click</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_handleBackClick</span><span class="p">);</span></div><div class='line' id='LC428'><br/></div><div class='line' id='LC429'>		<span class="k">this</span><span class="p">.</span><span class="nx">backButton</span><span class="p">.</span><span class="nx">text</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">args</span><span class="p">.</span><span class="nx">buttons</span><span class="p">.</span><span class="nx">backText</span><span class="p">);</span></div><div class='line' id='LC430'>		<span class="k">this</span><span class="p">.</span><span class="nx">nextButton</span><span class="p">.</span><span class="nx">text</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">args</span><span class="p">.</span><span class="nx">buttons</span><span class="p">.</span><span class="nx">nextText</span><span class="p">);</span></div><div class='line' id='LC431'><br/></div><div class='line' id='LC432'><br/></div><div class='line' id='LC433'><br/></div><div class='line' id='LC434'>		<span class="cm">/*</span></div><div class='line' id='LC435'><span class="cm">		 * adjust the height of the modal, and everything associated with</span></div><div class='line' id='LC436'><span class="cm">		 * adjusting the height</span></div><div class='line' id='LC437'><span class="cm">		 */</span></div><div class='line' id='LC438'>		<span class="kd">var</span> <span class="nx">baseHeight</span> <span class="o">=</span> <span class="mi">360</span><span class="p">;</span></div><div class='line' id='LC439'>		<span class="kd">var</span> <span class="nx">navHeight</span> <span class="o">=</span> <span class="nx">baseHeight</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">args</span><span class="p">.</span><span class="nx">increaseHeight</span><span class="p">;</span></div><div class='line' id='LC440'><br/></div><div class='line' id='LC441'>		<span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.wizard-nav-container&quot;</span><span class="p">).</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;height&quot;</span><span class="p">,</span> <span class="nx">navHeight</span><span class="p">);</span></div><div class='line' id='LC442'>		<span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.wizard-steps&quot;</span><span class="p">).</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;height&quot;</span><span class="p">,</span> <span class="p">(</span><span class="nx">navHeight</span><span class="o">+</span><span class="mi">65</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;px&quot;</span><span class="p">);</span></div><div class='line' id='LC443'>		<span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.wizard-card&quot;</span><span class="p">).</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;height&quot;</span><span class="p">,</span> <span class="p">(</span><span class="nx">navHeight</span><span class="o">-</span><span class="mi">60</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;px&quot;</span><span class="p">);</span></div><div class='line' id='LC444'>		<span class="k">this</span><span class="p">.</span><span class="nx">submitCards</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;height&quot;</span><span class="p">,</span> <span class="p">(</span><span class="nx">navHeight</span><span class="o">-</span><span class="mi">60</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;px&quot;</span><span class="p">);</span></div><div class='line' id='LC445'><br/></div><div class='line' id='LC446'>		<span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;margin-top&quot;</span><span class="p">,</span> <span class="o">-</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">height</span><span class="p">()</span> <span class="o">/</span> <span class="mi">2</span><span class="p">));</span></div><div class='line' id='LC447'><br/></div><div class='line' id='LC448'><br/></div><div class='line' id='LC449'>		<span class="cm">/*</span></div><div class='line' id='LC450'><span class="cm">		 * adjust the width of the modal</span></div><div class='line' id='LC451'><span class="cm">		 */</span></div><div class='line' id='LC452'>		<span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;width&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">args</span><span class="p">.</span><span class="nx">width</span><span class="p">);</span></div><div class='line' id='LC453'>		<span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s2">&quot;margin-left&quot;</span><span class="p">,</span> <span class="o">-</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">args</span><span class="p">.</span><span class="nx">width</span> <span class="o">/</span> <span class="mi">2</span><span class="p">));</span></div><div class='line' id='LC454'><br/></div><div class='line' id='LC455'><br/></div><div class='line' id='LC456'><br/></div><div class='line' id='LC457'>		<span class="cm">/*</span></div><div class='line' id='LC458'><span class="cm">		 * set up slimScroll for our nav, if slimScroll is installed</span></div><div class='line' id='LC459'><span class="cm">		 */</span></div><div class='line' id='LC460'>		<span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">slimScroll</span> <span class="o">&amp;&amp;</span> <span class="kc">false</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC461'>			<span class="kd">var</span> <span class="nx">slimScrollArgs</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC462'>				<span class="nx">position</span><span class="o">:</span> <span class="s2">&quot;left&quot;</span><span class="p">,</span></div><div class='line' id='LC463'>				<span class="nx">height</span><span class="o">:</span> <span class="s2">&quot;360px&quot;</span><span class="p">,</span></div><div class='line' id='LC464'>				<span class="nx">size</span><span class="o">:</span> <span class="s2">&quot;8px&quot;</span><span class="p">,</span></div><div class='line' id='LC465'>				<span class="nx">distance</span><span class="o">:</span> <span class="s2">&quot;5px&quot;</span><span class="p">,</span></div><div class='line' id='LC466'>				<span class="nx">railVisible</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC467'>				<span class="nx">disableFadeOut</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC468'>			<span class="p">};</span></div><div class='line' id='LC469'>			<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="nx">slimScrollArgs</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">args</span><span class="p">.</span><span class="nx">slimScroll</span> <span class="o">||</span> <span class="p">{});</span></div><div class='line' id='LC470'>			<span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.wizard-nav-container&quot;</span><span class="p">).</span><span class="nx">slimScroll</span><span class="p">(</span><span class="nx">slimScrollArgs</span><span class="p">);</span></div><div class='line' id='LC471'>		<span class="p">}</span></div><div class='line' id='LC472'><br/></div><div class='line' id='LC473'>		<span class="cm">/*</span></div><div class='line' id='LC474'><span class="cm">		 * if the close X is clicked, reset the wizard</span></div><div class='line' id='LC475'><span class="cm">		 */</span></div><div class='line' id='LC476'>		<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC477'>		<span class="k">this</span><span class="p">.</span><span class="nx">closeButton</span><span class="p">.</span><span class="nx">click</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC478'>			<span class="nx">self</span><span class="p">.</span><span class="nx">reset</span><span class="p">();</span></div><div class='line' id='LC479'>			<span class="nx">self</span><span class="p">.</span><span class="nx">close</span><span class="p">();</span></div><div class='line' id='LC480'>		<span class="p">})</span></div><div class='line' id='LC481'><br/></div><div class='line' id='LC482'>		<span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.wizard-steps&quot;</span><span class="p">).</span><span class="nx">on</span><span class="p">(</span></div><div class='line' id='LC483'>			<span class="s2">&quot;click&quot;</span><span class="p">,</span> <span class="s2">&quot;li.already-visited a.wizard-nav-link&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC484'>			<span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC485'>				<span class="kd">var</span> <span class="nx">index</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s2">&quot;navindex&quot;</span><span class="p">));</span></div><div class='line' id='LC486'>				<span class="nx">event</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">setCard</span><span class="p">(</span><span class="nx">index</span><span class="p">);</span></div><div class='line' id='LC487'>			<span class="p">});</span></div><div class='line' id='LC488'><br/></div><div class='line' id='LC489'>		<span class="kd">var</span> <span class="nx">title</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">markup</span><span class="p">.</span><span class="nx">children</span><span class="p">(</span><span class="s2">&quot;h1&quot;</span><span class="p">).</span><span class="nx">first</span><span class="p">();</span></div><div class='line' id='LC490'>		<span class="k">if</span> <span class="p">(</span><span class="nx">title</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">setTitle</span><span class="p">(</span><span class="nx">title</span><span class="p">.</span><span class="nx">text</span><span class="p">());}</span></div><div class='line' id='LC491'><br/></div><div class='line' id='LC492'>		<span class="k">this</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s2">&quot;submit&quot;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">_defaultSubmit</span><span class="p">);</span></div><div class='line' id='LC493'>	<span class="p">}</span></div><div class='line' id='LC494'><br/></div><div class='line' id='LC495'>	<span class="nx">Wizard</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC496'><br/></div><div class='line' id='LC497'>		<span class="nx">errorPopover</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC498'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;launching popover on&quot;</span><span class="p">,</span> <span class="nx">el</span><span class="p">);</span></div><div class='line' id='LC499'>			<span class="kd">var</span> <span class="nx">popover</span> <span class="o">=</span> <span class="nx">el</span><span class="p">.</span><span class="nx">popover</span><span class="p">({</span></div><div class='line' id='LC500'>				<span class="nx">content</span><span class="o">:</span> <span class="nx">msg</span><span class="p">,</span></div><div class='line' id='LC501'>				<span class="nx">trigger</span><span class="o">:</span> <span class="s2">&quot;manual&quot;</span></div><div class='line' id='LC502'>			<span class="p">}).</span><span class="nx">popover</span><span class="p">(</span><span class="s2">&quot;show&quot;</span><span class="p">).</span><span class="nx">next</span><span class="p">(</span><span class="s2">&quot;.popover&quot;</span><span class="p">);</span></div><div class='line' id='LC503'><br/></div><div class='line' id='LC504'>			<span class="nx">popover</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s2">&quot;error-popover&quot;</span><span class="p">);</span></div><div class='line' id='LC505'>			<span class="k">return</span> <span class="nx">popover</span><span class="p">;</span></div><div class='line' id='LC506'>		<span class="p">},</span></div><div class='line' id='LC507'><br/></div><div class='line' id='LC508'>		<span class="nx">destroyPopover</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">pop</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC509'>			<span class="nx">pop</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">pop</span><span class="p">);</span></div><div class='line' id='LC510'>			<span class="nx">pop</span><span class="p">.</span><span class="nx">parent</span><span class="p">(</span><span class="s2">&quot;.control-group&quot;</span><span class="p">).</span><span class="nx">toggleClass</span><span class="p">(</span><span class="s2">&quot;error&quot;</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC511'><br/></div><div class='line' id='LC512'>			<span class="cm">/*</span></div><div class='line' id='LC513'><span class="cm">			 * this is the element that the popover was created for</span></div><div class='line' id='LC514'><span class="cm">			 */</span></div><div class='line' id='LC515'>			<span class="kd">var</span> <span class="nx">el</span> <span class="o">=</span> <span class="nx">pop</span><span class="p">.</span><span class="nx">prev</span><span class="p">();</span></div><div class='line' id='LC516'><br/></div><div class='line' id='LC517'>			<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC518'>				<span class="nx">el</span><span class="p">.</span><span class="nx">popover</span><span class="p">(</span><span class="s2">&quot;destroy&quot;</span><span class="p">);</span></div><div class='line' id='LC519'>			<span class="p">}</span></div><div class='line' id='LC520'>			<span class="cm">/*</span></div><div class='line' id='LC521'><span class="cm">			 * older versions of bootstrap don&#39;t have a destroy call</span></div><div class='line' id='LC522'><span class="cm">			 * for popovers</span></div><div class='line' id='LC523'><span class="cm">			 */</span></div><div class='line' id='LC524'>			<span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC525'>				<span class="nx">el</span><span class="p">.</span><span class="nx">popover</span><span class="p">(</span><span class="s2">&quot;hide&quot;</span><span class="p">);</span></div><div class='line' id='LC526'>			<span class="p">}</span></div><div class='line' id='LC527'>		<span class="p">},</span></div><div class='line' id='LC528'><br/></div><div class='line' id='LC529'>		<span class="nx">hidePopovers</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">el</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC530'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;hiding all popovers&quot;</span><span class="p">);</span></div><div class='line' id='LC531'>			<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC532'>			<span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.error-popover&quot;</span><span class="p">).</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">popover</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC533'>				<span class="nx">self</span><span class="p">.</span><span class="nx">destroyPopover</span><span class="p">(</span><span class="nx">popover</span><span class="p">);</span></div><div class='line' id='LC534'>			<span class="p">});</span></div><div class='line' id='LC535'>		<span class="p">},</span></div><div class='line' id='LC536'><br/></div><div class='line' id='LC537'>		<span class="nx">eachCard</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC538'>			<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_cards</span><span class="p">,</span> <span class="nx">fn</span><span class="p">);</span></div><div class='line' id='LC539'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC540'>		<span class="p">},</span></div><div class='line' id='LC541'><br/></div><div class='line' id='LC542'>		<span class="nx">getActiveCard</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC543'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;getting active card&quot;</span><span class="p">);</span></div><div class='line' id='LC544'>			<span class="kd">var</span> <span class="nx">currentCard</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC545'><br/></div><div class='line' id='LC546'>			<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_cards</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">card</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC547'>				<span class="k">if</span> <span class="p">(</span><span class="nx">card</span><span class="p">.</span><span class="nx">isActive</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC548'>					<span class="nx">currentCard</span> <span class="o">=</span> <span class="nx">card</span><span class="p">;</span></div><div class='line' id='LC549'>					<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC550'>				<span class="p">}</span></div><div class='line' id='LC551'>			<span class="p">});</span></div><div class='line' id='LC552'>			<span class="k">if</span> <span class="p">(</span><span class="nx">currentCard</span><span class="p">)</span> <span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;found active card&quot;</span><span class="p">,</span> <span class="nx">currentCard</span><span class="p">);}</span></div><div class='line' id='LC553'>			<span class="k">else</span> <span class="p">{</span><span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;couldn&#39;t find an active card&quot;</span><span class="p">);}</span></div><div class='line' id='LC554'>			<span class="k">return</span> <span class="nx">currentCard</span><span class="p">;</span></div><div class='line' id='LC555'>		<span class="p">},</span></div><div class='line' id='LC556'><br/></div><div class='line' id='LC557'>		<span class="nx">setTitle</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">title</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC558'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;setting title to&quot;</span><span class="p">,</span> <span class="nx">title</span><span class="p">);</span></div><div class='line' id='LC559'>			<span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.wizard-title&quot;</span><span class="p">).</span><span class="nx">first</span><span class="p">().</span><span class="nx">text</span><span class="p">(</span><span class="nx">title</span><span class="p">);</span></div><div class='line' id='LC560'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC561'>		<span class="p">},</span></div><div class='line' id='LC562'><br/></div><div class='line' id='LC563'>		<span class="nx">setSubtitle</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">title</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC564'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;setting subtitle to&quot;</span><span class="p">,</span> <span class="nx">title</span><span class="p">);</span></div><div class='line' id='LC565'>			<span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.wizard-subtitle&quot;</span><span class="p">).</span><span class="nx">first</span><span class="p">().</span><span class="nx">text</span><span class="p">(</span><span class="nx">title</span><span class="p">);</span></div><div class='line' id='LC566'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC567'>		<span class="p">},</span></div><div class='line' id='LC568'><br/></div><div class='line' id='LC569'>		<span class="nx">changeNextButton</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">,</span> <span class="nx">cls</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC570'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;changing next button, text: &quot;</span> <span class="o">+</span> <span class="nx">text</span><span class="p">,</span> <span class="s2">&quot;class: &quot;</span> <span class="o">+</span> <span class="nx">cls</span><span class="p">);</span></div><div class='line' id='LC571'>			<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">cls</span><span class="p">)</span> <span class="o">!=</span> <span class="s2">&quot;undefined&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC572'>				<span class="k">this</span><span class="p">.</span><span class="nx">nextButton</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="s2">&quot;btn-success btn-primary&quot;</span><span class="p">);</span></div><div class='line' id='LC573'>			<span class="p">}</span></div><div class='line' id='LC574'><br/></div><div class='line' id='LC575'>			<span class="k">if</span> <span class="p">(</span><span class="nx">cls</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC576'>				<span class="k">this</span><span class="p">.</span><span class="nx">nextButton</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">cls</span><span class="p">);</span></div><div class='line' id='LC577'>			<span class="p">}</span></div><div class='line' id='LC578'>			<span class="k">this</span><span class="p">.</span><span class="nx">nextButton</span><span class="p">.</span><span class="nx">text</span><span class="p">(</span><span class="nx">text</span><span class="p">);</span></div><div class='line' id='LC579'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC580'>		<span class="p">},</span></div><div class='line' id='LC581'><br/></div><div class='line' id='LC582'>		<span class="nx">hide</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC583'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;hiding&quot;</span><span class="p">);</span></div><div class='line' id='LC584'>			<span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">modal</span><span class="p">(</span><span class="s2">&quot;hide&quot;</span><span class="p">);</span></div><div class='line' id='LC585'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC586'>		<span class="p">},</span></div><div class='line' id='LC587'><br/></div><div class='line' id='LC588'>		<span class="nx">close</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC589'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;closing&quot;</span><span class="p">);</span></div><div class='line' id='LC590'>			<span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">modal</span><span class="p">(</span><span class="s2">&quot;hide&quot;</span><span class="p">);</span></div><div class='line' id='LC591'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC592'>		<span class="p">},</span></div><div class='line' id='LC593'><br/></div><div class='line' id='LC594'><br/></div><div class='line' id='LC595'>		<span class="nx">show</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC596'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;showing&quot;</span><span class="p">);</span></div><div class='line' id='LC597'>			<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_firstShow</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC598'>				<span class="k">this</span><span class="p">.</span><span class="nx">setCard</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC599'>				<span class="k">this</span><span class="p">.</span><span class="nx">_firstShow</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC600'>			<span class="p">}</span></div><div class='line' id='LC601'>			<span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">modal</span><span class="p">();</span></div><div class='line' id='LC602'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC603'>		<span class="p">},</span></div><div class='line' id='LC604'><br/></div><div class='line' id='LC605'>		<span class="nx">on</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC606'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;adding listener to event &quot;</span> <span class="o">+</span> <span class="nx">name</span><span class="p">);</span></div><div class='line' id='LC607'>			<span class="k">this</span><span class="p">.</span><span class="nx">_events</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">fn</span><span class="p">;</span></div><div class='line' id='LC608'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC609'>		<span class="p">},</span></div><div class='line' id='LC610'><br/></div><div class='line' id='LC611'>		<span class="nx">trigger</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC612'>			<span class="kd">var</span> <span class="nx">name</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC613'>			<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC614'>			<span class="nx">args</span><span class="p">.</span><span class="nx">shift</span><span class="p">();</span></div><div class='line' id='LC615'>			<span class="nx">args</span><span class="p">.</span><span class="nx">unshift</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC616'><br/></div><div class='line' id='LC617'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;firing event &quot;</span> <span class="o">+</span> <span class="nx">name</span><span class="p">);</span></div><div class='line' id='LC618'>			<span class="kd">var</span> <span class="nx">handler</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_events</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC619'>			<span class="kd">var</span> <span class="nx">ret</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC620'><br/></div><div class='line' id='LC621'>			<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span><span class="p">(</span><span class="nx">handler</span><span class="p">)</span> <span class="o">==</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC622'>				<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;found event handler, calling &quot;</span> <span class="o">+</span> <span class="nx">name</span><span class="p">);</span></div><div class='line' id='LC623'>				<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC624'>					<span class="nx">ret</span> <span class="o">=</span> <span class="nx">handler</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC625'>				<span class="p">}</span></div><div class='line' id='LC626'>				<span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC627'>					<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;event handler &quot;</span> <span class="o">+</span> <span class="nx">name</span> <span class="o">+</span> <span class="s2">&quot; had an exception&quot;</span><span class="p">);</span></div><div class='line' id='LC628'>				<span class="p">}</span></div><div class='line' id='LC629'>			<span class="p">}</span></div><div class='line' id='LC630'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC631'>				<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;couldn&#39;t find an event handler for &quot;</span> <span class="o">+</span> <span class="nx">name</span><span class="p">);</span></div><div class='line' id='LC632'>			<span class="p">}</span></div><div class='line' id='LC633'>			<span class="k">return</span> <span class="nx">ret</span><span class="p">;</span></div><div class='line' id='LC634'>		<span class="p">},</span></div><div class='line' id='LC635'><br/></div><div class='line' id='LC636'><br/></div><div class='line' id='LC637'>		<span class="nx">reset</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC638'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;resetting&quot;</span><span class="p">);</span></div><div class='line' id='LC639'><br/></div><div class='line' id='LC640'>			<span class="k">this</span><span class="p">.</span><span class="nx">updateProgressBar</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC641'>			<span class="k">this</span><span class="p">.</span><span class="nx">hideSubmitCards</span><span class="p">();</span></div><div class='line' id='LC642'><br/></div><div class='line' id='LC643'>			<span class="k">this</span><span class="p">.</span><span class="nx">setCard</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC644'>			<span class="k">this</span><span class="p">.</span><span class="nx">lockCards</span><span class="p">();</span></div><div class='line' id='LC645'><br/></div><div class='line' id='LC646'>			<span class="k">this</span><span class="p">.</span><span class="nx">enableNextButton</span><span class="p">();</span></div><div class='line' id='LC647'>			<span class="k">this</span><span class="p">.</span><span class="nx">showButtons</span><span class="p">();</span></div><div class='line' id='LC648'><br/></div><div class='line' id='LC649'>			<span class="k">this</span><span class="p">.</span><span class="nx">hidePopovers</span><span class="p">();</span></div><div class='line' id='LC650'><br/></div><div class='line' id='LC651'>			<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;reset&quot;</span><span class="p">);</span></div><div class='line' id='LC652'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC653'>		<span class="p">},</span></div><div class='line' id='LC654'><br/></div><div class='line' id='LC655'>		<span class="nx">log</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC656'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">window</span><span class="p">.</span><span class="nx">console</span> <span class="o">||</span> <span class="o">!</span><span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">wizard</span><span class="p">.</span><span class="nx">logging</span><span class="p">)</span> <span class="p">{</span><span class="k">return</span><span class="p">;}</span></div><div class='line' id='LC657'>			<span class="kd">var</span> <span class="nx">prepend</span> <span class="o">=</span> <span class="s2">&quot;wizard &quot;</span><span class="o">+</span><span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">id</span><span class="o">+</span><span class="s2">&quot;: &quot;</span><span class="p">;</span></div><div class='line' id='LC658'>			<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="p">[</span><span class="nx">prepend</span><span class="p">];</span></div><div class='line' id='LC659'>			<span class="nx">args</span><span class="p">.</span><span class="nx">push</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">args</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC660'>			<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">console</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC661'>		<span class="p">},</span></div><div class='line' id='LC662'><br/></div><div class='line' id='LC663'><br/></div><div class='line' id='LC664'>		<span class="cm">/*</span></div><div class='line' id='LC665'><span class="cm">		 * this handles switching to the next card or previous card, taking</span></div><div class='line' id='LC666'><span class="cm">		 * care to skip over disabled cards</span></div><div class='line' id='LC667'><span class="cm">		 */</span></div><div class='line' id='LC668'>		<span class="nx">_abstractIncrementStep</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">direction</span><span class="p">,</span> <span class="nx">getNext</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC669'>			<span class="kd">var</span> <span class="nx">current</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getActiveCard</span><span class="p">();</span></div><div class='line' id='LC670'>			<span class="kd">var</span> <span class="nx">next</span><span class="p">;</span></div><div class='line' id='LC671'><br/></div><div class='line' id='LC672'>			<span class="k">if</span> <span class="p">(</span><span class="nx">current</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC673'>				<span class="cm">/*</span></div><div class='line' id='LC674'><span class="cm">				 * loop until we find a card that isn&#39;t disabled</span></div><div class='line' id='LC675'><span class="cm">				 */</span></div><div class='line' id='LC676'>			    <span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;searching for valid next card&quot;</span><span class="p">);</span></div><div class='line' id='LC677'>				<span class="k">while</span> <span class="p">(</span><span class="kc">true</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC678'>					<span class="nx">next</span> <span class="o">=</span> <span class="nx">getNext</span><span class="p">(</span><span class="nx">current</span><span class="p">);</span></div><div class='line' id='LC679'>					<span class="k">if</span> <span class="p">(</span><span class="nx">next</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC680'>						<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;looking at card&quot;</span><span class="p">,</span> <span class="nx">next</span><span class="p">.</span><span class="nx">index</span><span class="p">);</span></div><div class='line' id='LC681'>						<span class="k">if</span> <span class="p">(</span><span class="nx">next</span><span class="p">.</span><span class="nx">isDisabled</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC682'>							<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;card &quot;</span> <span class="o">+</span> <span class="nx">next</span><span class="p">.</span><span class="nx">index</span> <span class="o">+</span> <span class="s2">&quot; is disabled/locked, continuing&quot;</span><span class="p">);</span></div><div class='line' id='LC683'>							<span class="nx">current</span> <span class="o">=</span> <span class="nx">next</span><span class="p">;</span></div><div class='line' id='LC684'>							<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC685'>						<span class="p">}</span></div><div class='line' id='LC686'>						<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC687'>							<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">setCard</span><span class="p">(</span><span class="nx">current</span><span class="p">.</span><span class="nx">index</span><span class="o">+</span><span class="nx">direction</span><span class="p">);</span></div><div class='line' id='LC688'>						<span class="p">}</span></div><div class='line' id='LC689'>					<span class="p">}</span></div><div class='line' id='LC690'>					<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC691'>						<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;next card is not defined, breaking&quot;</span><span class="p">);</span></div><div class='line' id='LC692'>						<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC693'>					<span class="p">}</span></div><div class='line' id='LC694'>				<span class="p">}</span></div><div class='line' id='LC695'>			<span class="p">}</span></div><div class='line' id='LC696'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC697'>				<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;current card is undefined&quot;</span><span class="p">);</span></div><div class='line' id='LC698'>			<span class="p">}</span></div><div class='line' id='LC699'>		<span class="p">},</span></div><div class='line' id='LC700'><br/></div><div class='line' id='LC701'><br/></div><div class='line' id='LC702'>		<span class="nx">incrementCard</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC703'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;incrementing card&quot;</span><span class="p">);</span></div><div class='line' id='LC704'>			<span class="kd">var</span> <span class="nx">card</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_abstractIncrementStep</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">current</span><span class="p">){</span><span class="k">return</span> <span class="nx">current</span><span class="p">.</span><span class="nx">next</span><span class="p">;});</span></div><div class='line' id='LC705'>			<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;incrementCard&quot;</span><span class="p">);</span></div><div class='line' id='LC706'>			<span class="k">return</span> <span class="nx">card</span><span class="p">;</span></div><div class='line' id='LC707'>		<span class="p">},</span></div><div class='line' id='LC708'><br/></div><div class='line' id='LC709'>		<span class="nx">decrementCard</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC710'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;decrementing card&quot;</span><span class="p">);</span></div><div class='line' id='LC711'>			<span class="kd">var</span> <span class="nx">card</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_abstractIncrementStep</span><span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">current</span><span class="p">){</span><span class="k">return</span> <span class="nx">current</span><span class="p">.</span><span class="nx">prev</span><span class="p">;});</span></div><div class='line' id='LC712'>			<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;decrementCard&quot;</span><span class="p">);</span></div><div class='line' id='LC713'>			<span class="k">return</span> <span class="nx">card</span><span class="p">;</span></div><div class='line' id='LC714'>		<span class="p">},</span></div><div class='line' id='LC715'><br/></div><div class='line' id='LC716'>		<span class="nx">setCard</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC717'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;setting card to &quot;</span> <span class="o">+</span> <span class="nx">i</span><span class="p">);</span></div><div class='line' id='LC718'>			<span class="k">this</span><span class="p">.</span><span class="nx">hideSubmitCards</span><span class="p">();</span></div><div class='line' id='LC719'>			<span class="kd">var</span> <span class="nx">currentCard</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getActiveCard</span><span class="p">();</span></div><div class='line' id='LC720'><br/></div><div class='line' id='LC721'>			<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_submitting</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC722'>				<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;we&#39;re submitting the wizard already, can&#39;t change cards&quot;</span><span class="p">);</span></div><div class='line' id='LC723'>				<span class="k">return</span> <span class="nx">currentCard</span><span class="p">;</span></div><div class='line' id='LC724'>			<span class="p">}</span></div><div class='line' id='LC725'><br/></div><div class='line' id='LC726'>			<span class="kd">var</span> <span class="nx">newCard</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">_cards</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC727'>			<span class="k">if</span> <span class="p">(</span><span class="nx">newCard</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC728'>				<span class="k">if</span> <span class="p">(</span><span class="nx">newCard</span><span class="p">.</span><span class="nx">isDisabled</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC729'>					<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;new card is currently disabled, returning&quot;</span><span class="p">);</span></div><div class='line' id='LC730'>					<span class="k">return</span> <span class="nx">currentCard</span><span class="p">;</span></div><div class='line' id='LC731'>				<span class="p">}</span></div><div class='line' id='LC732'><br/></div><div class='line' id='LC733'>				<span class="k">if</span> <span class="p">(</span><span class="nx">currentCard</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC734'><br/></div><div class='line' id='LC735'>					<span class="cm">/*</span></div><div class='line' id='LC736'><span class="cm">					 * here, we&#39;re only validating if we&#39;re going forward,</span></div><div class='line' id='LC737'><span class="cm">					 * not if we&#39;re going backwards in a step</span></div><div class='line' id='LC738'><span class="cm">					 */</span></div><div class='line' id='LC739'>					<span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">&gt;</span> <span class="nx">currentCard</span><span class="p">.</span><span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC740'>						<span class="kd">var</span> <span class="nx">cardToValidate</span> <span class="o">=</span> <span class="nx">currentCard</span><span class="p">;</span></div><div class='line' id='LC741'>						<span class="kd">var</span> <span class="nx">ok</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC742'><br/></div><div class='line' id='LC743'>						<span class="cm">/*</span></div><div class='line' id='LC744'><span class="cm">						 * we need to loop over every card between our current</span></div><div class='line' id='LC745'><span class="cm">						 * card and the card that we clicked, and re-validate</span></div><div class='line' id='LC746'><span class="cm">						 * them.  if there&#39;s an error, we need to select the</span></div><div class='line' id='LC747'><span class="cm">						 * first card to have an error</span></div><div class='line' id='LC748'><span class="cm">						 */</span></div><div class='line' id='LC749'>						<span class="k">while</span> <span class="p">(</span><span class="nx">cardToValidate</span><span class="p">.</span><span class="nx">index</span> <span class="o">!=</span> <span class="nx">newCard</span><span class="p">.</span><span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC750'>							<span class="cm">/*</span></div><div class='line' id='LC751'><span class="cm">							 * unless we&#39;re validating the card that we&#39;re</span></div><div class='line' id='LC752'><span class="cm">							 * leaving, we need to select the card, so that</span></div><div class='line' id='LC753'><span class="cm">							 * any validators that trigger errorPopovers can</span></div><div class='line' id='LC754'><span class="cm">							 * display correctly</span></div><div class='line' id='LC755'><span class="cm">							 */</span></div><div class='line' id='LC756'>							<span class="k">if</span> <span class="p">(</span><span class="nx">cardToValidate</span><span class="p">.</span><span class="nx">index</span> <span class="o">!=</span> <span class="nx">currentCard</span><span class="p">.</span><span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC757'>								<span class="nx">cardToValidate</span><span class="p">.</span><span class="nx">prev</span><span class="p">.</span><span class="nx">deselect</span><span class="p">();</span></div><div class='line' id='LC758'>								<span class="nx">cardToValidate</span><span class="p">.</span><span class="nx">prev</span><span class="p">.</span><span class="nx">markVisited</span><span class="p">();</span></div><div class='line' id='LC759'>								<span class="nx">cardToValidate</span><span class="p">.</span><span class="nx">select</span><span class="p">();</span></div><div class='line' id='LC760'>							<span class="p">}</span></div><div class='line' id='LC761'>							<span class="nx">ok</span> <span class="o">=</span> <span class="nx">cardToValidate</span><span class="p">.</span><span class="nx">validate</span><span class="p">();</span></div><div class='line' id='LC762'>							<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">ok</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC763'>								<span class="k">return</span> <span class="nx">cardToValidate</span><span class="p">;</span></div><div class='line' id='LC764'>							<span class="p">}</span></div><div class='line' id='LC765'>							<span class="nx">cardToValidate</span> <span class="o">=</span> <span class="nx">cardToValidate</span><span class="p">.</span><span class="nx">next</span><span class="p">;</span></div><div class='line' id='LC766'>						<span class="p">}</span></div><div class='line' id='LC767'><br/></div><div class='line' id='LC768'>						<span class="nx">cardToValidate</span><span class="p">.</span><span class="nx">prev</span><span class="p">.</span><span class="nx">deselect</span><span class="p">();</span></div><div class='line' id='LC769'>						<span class="nx">cardToValidate</span><span class="p">.</span><span class="nx">prev</span><span class="p">.</span><span class="nx">markVisited</span><span class="p">();</span></div><div class='line' id='LC770'>					<span class="p">}</span></div><div class='line' id='LC771'><br/></div><div class='line' id='LC772'>					<span class="nx">currentCard</span><span class="p">.</span><span class="nx">deselect</span><span class="p">();</span></div><div class='line' id='LC773'>					<span class="nx">currentCard</span><span class="p">.</span><span class="nx">markVisited</span><span class="p">();</span></div><div class='line' id='LC774'>				<span class="p">}</span></div><div class='line' id='LC775'><br/></div><div class='line' id='LC776'>				<span class="nx">newCard</span><span class="p">.</span><span class="nx">select</span><span class="p">();</span></div><div class='line' id='LC777'><br/></div><div class='line' id='LC778'>				<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">args</span><span class="p">.</span><span class="nx">progressBarCurrent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC779'>					<span class="kd">var</span> <span class="nx">last_percent</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">percentComplete</span><span class="p">;</span></div><div class='line' id='LC780'>					<span class="k">this</span><span class="p">.</span><span class="nx">percentComplete</span> <span class="o">=</span> <span class="nx">i</span> <span class="o">*</span> <span class="mf">100.0</span> <span class="o">/</span> <span class="k">this</span><span class="p">.</span><span class="nx">_cards</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC781'>					<span class="k">this</span><span class="p">.</span><span class="nx">updateProgressBar</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">percentComplete</span><span class="p">);</span>					</div><div class='line' id='LC782'>				<span class="p">}</span></div><div class='line' id='LC783'>				<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC784'>					<span class="kd">var</span> <span class="nx">last_percent</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">percentComplete</span><span class="p">;</span></div><div class='line' id='LC785'>					<span class="k">this</span><span class="p">.</span><span class="nx">percentComplete</span> <span class="o">=</span> <span class="nx">i</span> <span class="o">*</span> <span class="mf">100.0</span> <span class="o">/</span> <span class="k">this</span><span class="p">.</span><span class="nx">_cards</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC786'>					<span class="k">this</span><span class="p">.</span><span class="nx">percentComplete</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="nx">last_percent</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">percentComplete</span><span class="p">);</span></div><div class='line' id='LC787'>					<span class="k">this</span><span class="p">.</span><span class="nx">updateProgressBar</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">percentComplete</span><span class="p">);</span></div><div class='line' id='LC788'>				<span class="p">}</span></div><div class='line' id='LC789'><br/></div><div class='line' id='LC790'>				<span class="k">return</span> <span class="nx">newCard</span><span class="p">;</span></div><div class='line' id='LC791'>			<span class="p">}</span></div><div class='line' id='LC792'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC793'>				<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;couldn&#39;t find card &quot;</span> <span class="o">+</span> <span class="nx">i</span><span class="p">);</span></div><div class='line' id='LC794'>			<span class="p">}</span></div><div class='line' id='LC795'>		<span class="p">},</span></div><div class='line' id='LC796'><br/></div><div class='line' id='LC797'>		<span class="nx">updateProgressBar</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">percent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC798'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;updating progress to &quot;</span> <span class="o">+</span> <span class="nx">percent</span> <span class="o">+</span> <span class="s2">&quot;%&quot;</span><span class="p">);</span></div><div class='line' id='LC799'>			<span class="k">this</span><span class="p">.</span><span class="nx">progress</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.bar&quot;</span><span class="p">).</span><span class="nx">css</span><span class="p">({</span><span class="nx">width</span><span class="o">:</span> <span class="nx">percent</span> <span class="o">+</span> <span class="s2">&quot;%&quot;</span><span class="p">});</span></div><div class='line' id='LC800'>			<span class="k">this</span><span class="p">.</span><span class="nx">percentComplete</span> <span class="o">=</span> <span class="nx">percent</span><span class="p">;</span></div><div class='line' id='LC801'><br/></div><div class='line' id='LC802'>			<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;progressBar&quot;</span><span class="p">,</span> <span class="nx">percent</span><span class="p">);</span></div><div class='line' id='LC803'><br/></div><div class='line' id='LC804'>			<span class="k">if</span> <span class="p">(</span><span class="nx">percent</span> <span class="o">==</span> <span class="mi">100</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC805'>				<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;progress is 100, animating progress bar&quot;</span><span class="p">);</span></div><div class='line' id='LC806'>				<span class="k">this</span><span class="p">.</span><span class="nx">progress</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="s2">&quot;active&quot;</span><span class="p">);</span></div><div class='line' id='LC807'>			<span class="p">}</span></div><div class='line' id='LC808'>			<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">percent</span> <span class="o">==</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC809'>				<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;progress is 0, disabling animation&quot;</span><span class="p">);</span></div><div class='line' id='LC810'>				<span class="k">this</span><span class="p">.</span><span class="nx">progress</span><span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="s2">&quot;active&quot;</span><span class="p">);</span></div><div class='line' id='LC811'>			<span class="p">}</span></div><div class='line' id='LC812'>		<span class="p">},</span></div><div class='line' id='LC813'><br/></div><div class='line' id='LC814'>		<span class="nx">getNextCard</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC815'>			<span class="kd">var</span> <span class="nx">currentCard</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getActiveCard</span><span class="p">();</span></div><div class='line' id='LC816'>			<span class="k">if</span> <span class="p">(</span><span class="nx">currentCard</span><span class="p">)</span> <span class="k">return</span> <span class="nx">currentCard</span><span class="p">.</span><span class="nx">next</span><span class="p">;</span></div><div class='line' id='LC817'>		<span class="p">},</span></div><div class='line' id='LC818'><br/></div><div class='line' id='LC819'>		<span class="nx">lockCards</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC820'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;locking nav cards&quot;</span><span class="p">);</span></div><div class='line' id='LC821'>			<span class="k">this</span><span class="p">.</span><span class="nx">eachCard</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span><span class="nx">card</span><span class="p">){</span><span class="nx">card</span><span class="p">.</span><span class="nx">unmarkVisited</span><span class="p">();});</span></div><div class='line' id='LC822'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC823'>		<span class="p">},</span></div><div class='line' id='LC824'><br/></div><div class='line' id='LC825'>		<span class="nx">disableCards</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC826'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;disabling all nav cards&quot;</span><span class="p">);</span></div><div class='line' id='LC827'>			<span class="k">this</span><span class="p">.</span><span class="nx">eachCard</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span><span class="nx">card</span><span class="p">){</span><span class="nx">card</span><span class="p">.</span><span class="nx">disable</span><span class="p">();});</span></div><div class='line' id='LC828'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC829'>		<span class="p">},</span></div><div class='line' id='LC830'><br/></div><div class='line' id='LC831'>		<span class="nx">enableCards</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC832'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;enabling all nav cards&quot;</span><span class="p">);</span></div><div class='line' id='LC833'>			<span class="k">this</span><span class="p">.</span><span class="nx">eachCard</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span><span class="nx">card</span><span class="p">){</span><span class="nx">card</span><span class="p">.</span><span class="nx">enable</span><span class="p">();});</span></div><div class='line' id='LC834'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC835'>		<span class="p">},</span></div><div class='line' id='LC836'><br/></div><div class='line' id='LC837'>		<span class="nx">hideCards</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC838'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;hiding cards&quot;</span><span class="p">);</span></div><div class='line' id='LC839'>			<span class="k">this</span><span class="p">.</span><span class="nx">eachCard</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span><span class="nx">card</span><span class="p">){</span><span class="nx">card</span><span class="p">.</span><span class="nx">deselect</span><span class="p">();});</span></div><div class='line' id='LC840'>			<span class="k">this</span><span class="p">.</span><span class="nx">hideSubmitCards</span><span class="p">();</span></div><div class='line' id='LC841'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC842'>		<span class="p">},</span></div><div class='line' id='LC843'><br/></div><div class='line' id='LC844'>		<span class="nx">hideButtons</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC845'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;hiding buttons&quot;</span><span class="p">);</span></div><div class='line' id='LC846'>			<span class="k">this</span><span class="p">.</span><span class="nx">nextButton</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC847'>			<span class="k">this</span><span class="p">.</span><span class="nx">backButton</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC848'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC849'>		<span class="p">},</span></div><div class='line' id='LC850'><br/></div><div class='line' id='LC851'>		<span class="nx">showButtons</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC852'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;showing buttons&quot;</span><span class="p">);</span></div><div class='line' id='LC853'>			<span class="k">this</span><span class="p">.</span><span class="nx">nextButton</span><span class="p">.</span><span class="nx">show</span><span class="p">();</span></div><div class='line' id='LC854'>			<span class="k">this</span><span class="p">.</span><span class="nx">backButton</span><span class="p">.</span><span class="nx">show</span><span class="p">();</span></div><div class='line' id='LC855'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC856'>		<span class="p">},</span></div><div class='line' id='LC857'><br/></div><div class='line' id='LC858'>		<span class="nx">getCard</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">el</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC859'>			<span class="kd">var</span> <span class="nx">cardDOMEl</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">el</span><span class="p">).</span><span class="nx">parents</span><span class="p">(</span><span class="s2">&quot;.wizard-card&quot;</span><span class="p">).</span><span class="nx">first</span><span class="p">()[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC860'>			<span class="k">if</span> <span class="p">(</span><span class="nx">cardDOMEl</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC861'>				<span class="kd">var</span> <span class="nx">foundCard</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC862'>				<span class="k">this</span><span class="p">.</span><span class="nx">eachCard</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">card</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC863'>					<span class="k">if</span> <span class="p">(</span><span class="nx">cardDOMEl</span> <span class="o">==</span> <span class="nx">card</span><span class="p">.</span><span class="nx">el</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC864'>						<span class="nx">foundCard</span> <span class="o">=</span> <span class="nx">card</span><span class="p">;</span></div><div class='line' id='LC865'>						<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC866'>					<span class="p">}</span></div><div class='line' id='LC867'>					<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC868'>				<span class="p">});</span></div><div class='line' id='LC869'>				<span class="k">return</span> <span class="nx">foundCard</span><span class="p">;</span></div><div class='line' id='LC870'>			<span class="p">}</span></div><div class='line' id='LC871'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC872'>				<span class="k">return</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC873'>			<span class="p">}</span></div><div class='line' id='LC874'>		<span class="p">},</span></div><div class='line' id='LC875'><br/></div><div class='line' id='LC876'>		<span class="nx">_createCards</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC877'>			<span class="kd">var</span> <span class="nx">prev</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC878'>			<span class="kd">var</span> <span class="nx">next</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC879'>			<span class="kd">var</span> <span class="nx">current_i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC880'>			<span class="kd">var</span> <span class="nx">currentCard</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC881'>			<span class="kd">var</span> <span class="nx">wizard</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC882'>			<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC883'><br/></div><div class='line' id='LC884'>			<span class="kd">var</span> <span class="nx">cards</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.wizard-cards .wizard-card&quot;</span><span class="p">);</span></div><div class='line' id='LC885'>			<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">cards</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">card</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC886'>				<span class="nx">card</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">card</span><span class="p">);</span></div><div class='line' id='LC887'><br/></div><div class='line' id='LC888'>				<span class="nx">prev</span> <span class="o">=</span> <span class="nx">currentCard</span><span class="p">;</span></div><div class='line' id='LC889'>				<span class="nx">currentCard</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">WizardCard</span><span class="p">(</span><span class="nx">wizard</span><span class="p">,</span> <span class="nx">card</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">prev</span><span class="p">,</span> <span class="nx">next</span><span class="p">);</span></div><div class='line' id='LC890'>				<span class="nx">self</span><span class="p">.</span><span class="nx">_cards</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">currentCard</span><span class="p">);</span></div><div class='line' id='LC891'>				<span class="k">if</span> <span class="p">(</span><span class="nx">currentCard</span><span class="p">.</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC892'>					<span class="nx">self</span><span class="p">.</span><span class="nx">cards</span><span class="p">[</span><span class="nx">currentCard</span><span class="p">.</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">currentCard</span><span class="p">;</span></div><div class='line' id='LC893'>				<span class="p">}</span></div><div class='line' id='LC894'>				<span class="k">if</span> <span class="p">(</span><span class="nx">prev</span><span class="p">)</span> <span class="p">{</span><span class="nx">prev</span><span class="p">.</span><span class="nx">next</span> <span class="o">=</span> <span class="nx">currentCard</span><span class="p">;}</span></div><div class='line' id='LC895'><br/></div><div class='line' id='LC896'>				<span class="nx">self</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.wizard-steps .nav-list&quot;</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span><span class="nx">currentCard</span><span class="p">.</span><span class="nx">nav</span><span class="p">);</span></div><div class='line' id='LC897'>			<span class="p">});</span></div><div class='line' id='LC898'>		<span class="p">},</span></div><div class='line' id='LC899'><br/></div><div class='line' id='LC900'>		<span class="nx">showSubmitCard</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC901'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;showing &quot;</span><span class="o">+</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot; submit card&quot;</span><span class="p">);</span></div><div class='line' id='LC902'><br/></div><div class='line' id='LC903'>			<span class="kd">var</span> <span class="nx">card</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.wizard-&quot;</span><span class="o">+</span><span class="nx">name</span><span class="p">);</span></div><div class='line' id='LC904'>			<span class="k">if</span> <span class="p">(</span><span class="nx">card</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC905'>				<span class="k">this</span><span class="p">.</span><span class="nx">hideCards</span><span class="p">();</span></div><div class='line' id='LC906'>				<span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.wizard-&quot;</span><span class="o">+</span><span class="nx">name</span><span class="p">).</span><span class="nx">show</span><span class="p">();</span></div><div class='line' id='LC907'>			<span class="p">}</span></div><div class='line' id='LC908'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC909'>				<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;couldn&#39;t find submit card &quot;</span><span class="o">+</span><span class="nx">name</span><span class="p">);</span></div><div class='line' id='LC910'>			<span class="p">}</span></div><div class='line' id='LC911'>		<span class="p">},</span></div><div class='line' id='LC912'><br/></div><div class='line' id='LC913'>		<span class="nx">hideSubmitCard</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC914'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;hiding &quot;</span><span class="o">+</span><span class="nx">name</span><span class="o">+</span><span class="s2">&quot; submit card&quot;</span><span class="p">);</span></div><div class='line' id='LC915'>			<span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.wizard-&quot;</span><span class="o">+</span><span class="nx">name</span><span class="p">).</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC916'>		<span class="p">},</span></div><div class='line' id='LC917'><br/></div><div class='line' id='LC918'>		<span class="nx">hideSubmitCards</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC919'>			<span class="kd">var</span> <span class="nx">wizard</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC920'>			<span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">([</span><span class="s2">&quot;success&quot;</span><span class="p">,</span> <span class="s2">&quot;error&quot;</span><span class="p">,</span> <span class="s2">&quot;failure&quot;</span><span class="p">,</span> <span class="s2">&quot;loading&quot;</span><span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC921'>				<span class="nx">wizard</span><span class="p">.</span><span class="nx">hideSubmitCard</span><span class="p">(</span><span class="nx">name</span><span class="p">);</span></div><div class='line' id='LC922'>			<span class="p">});</span></div><div class='line' id='LC923'>		<span class="p">},</span></div><div class='line' id='LC924'><br/></div><div class='line' id='LC925'>		<span class="nx">enableNextButton</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC926'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;enabling next button&quot;</span><span class="p">);</span></div><div class='line' id='LC927'>			<span class="k">this</span><span class="p">.</span><span class="nx">nextButton</span><span class="p">.</span><span class="nx">removeAttr</span><span class="p">(</span><span class="s2">&quot;disabled&quot;</span><span class="p">);</span></div><div class='line' id='LC928'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC929'>		<span class="p">},</span></div><div class='line' id='LC930'><br/></div><div class='line' id='LC931'>		<span class="nx">disableNextButton</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC932'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;disabling next button&quot;</span><span class="p">);</span></div><div class='line' id='LC933'>			<span class="k">this</span><span class="p">.</span><span class="nx">nextButton</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s2">&quot;disabled&quot;</span><span class="p">,</span> <span class="s2">&quot;disabled&quot;</span><span class="p">);</span></div><div class='line' id='LC934'>			<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC935'>		<span class="p">},</span></div><div class='line' id='LC936'><br/></div><div class='line' id='LC937'>		<span class="nx">serializeArray</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC938'>			<span class="kd">var</span> <span class="nx">form</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">children</span><span class="p">(</span><span class="s2">&quot;form&quot;</span><span class="p">).</span><span class="nx">first</span><span class="p">();</span></div><div class='line' id='LC939'>			<span class="k">return</span> <span class="nx">form</span><span class="p">.</span><span class="nx">serializeArray</span><span class="p">();</span></div><div class='line' id='LC940'>		<span class="p">},</span></div><div class='line' id='LC941'><br/></div><div class='line' id='LC942'>		<span class="nx">serialize</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC943'>			<span class="kd">var</span> <span class="nx">form</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">el</span><span class="p">.</span><span class="nx">children</span><span class="p">(</span><span class="s2">&quot;form&quot;</span><span class="p">).</span><span class="nx">first</span><span class="p">();</span></div><div class='line' id='LC944'>			<span class="k">return</span> <span class="nx">form</span><span class="p">.</span><span class="nx">serialize</span><span class="p">();</span></div><div class='line' id='LC945'>		<span class="p">},</span></div><div class='line' id='LC946'><br/></div><div class='line' id='LC947'><br/></div><div class='line' id='LC948'>		<span class="cm">/*</span></div><div class='line' id='LC949'><span class="cm">		 * the next 3 functions are to be called by the custom submit event</span></div><div class='line' id='LC950'><span class="cm">		 * handler.  the idea is that after you make an ajax call to submit</span></div><div class='line' id='LC951'><span class="cm">		 * your wizard data (or whatever it is you want to do at the end of</span></div><div class='line' id='LC952'><span class="cm">		 * the wizard), you call one of these 3 handlers to display a specific</span></div><div class='line' id='LC953'><span class="cm">		 * card for either success, failure, or error</span></div><div class='line' id='LC954'><span class="cm">		 */</span></div><div class='line' id='LC955'>		<span class="nx">submitSuccess</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC956'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;submit success&quot;</span><span class="p">);</span></div><div class='line' id='LC957'>			<span class="k">this</span><span class="p">.</span><span class="nx">_submitting</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC958'>&nbsp;&nbsp;&nbsp;&nbsp;		<span class="k">this</span><span class="p">.</span><span class="nx">showSubmitCard</span><span class="p">(</span><span class="s2">&quot;success&quot;</span><span class="p">);</span></div><div class='line' id='LC959'>&nbsp;&nbsp;&nbsp;&nbsp;		<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;submitSuccess&quot;</span><span class="p">);</span></div><div class='line' id='LC960'>		<span class="p">},</span></div><div class='line' id='LC961'><br/></div><div class='line' id='LC962'>		<span class="nx">submitFailure</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC963'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;submit failure&quot;</span><span class="p">);</span></div><div class='line' id='LC964'>			<span class="k">this</span><span class="p">.</span><span class="nx">_submitting</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC965'>&nbsp;&nbsp;&nbsp;&nbsp;		<span class="k">this</span><span class="p">.</span><span class="nx">showSubmitCard</span><span class="p">(</span><span class="s2">&quot;failure&quot;</span><span class="p">);</span></div><div class='line' id='LC966'>&nbsp;&nbsp;&nbsp;&nbsp;		<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;submitFailure&quot;</span><span class="p">);</span></div><div class='line' id='LC967'>		<span class="p">},</span></div><div class='line' id='LC968'><br/></div><div class='line' id='LC969'>		<span class="nx">submitError</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC970'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;submit error&quot;</span><span class="p">);</span></div><div class='line' id='LC971'>			<span class="k">this</span><span class="p">.</span><span class="nx">_submitting</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC972'>&nbsp;&nbsp;&nbsp;&nbsp;		<span class="k">this</span><span class="p">.</span><span class="nx">showSubmitCard</span><span class="p">(</span><span class="s2">&quot;error&quot;</span><span class="p">);</span></div><div class='line' id='LC973'>&nbsp;&nbsp;&nbsp;&nbsp;		<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;submitError&quot;</span><span class="p">);</span></div><div class='line' id='LC974'>		<span class="p">},</span></div><div class='line' id='LC975'><br/></div><div class='line' id='LC976'><br/></div><div class='line' id='LC977'>		<span class="nx">_submit</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC978'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;submitting wizard&quot;</span><span class="p">);</span></div><div class='line' id='LC979'>			<span class="k">this</span><span class="p">.</span><span class="nx">_submitting</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC980'><br/></div><div class='line' id='LC981'>			<span class="k">this</span><span class="p">.</span><span class="nx">lockCards</span><span class="p">();</span></div><div class='line' id='LC982'>			<span class="k">this</span><span class="p">.</span><span class="nx">backButton</span><span class="p">.</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC983'><br/></div><div class='line' id='LC984'>			<span class="k">this</span><span class="p">.</span><span class="nx">showSubmitCard</span><span class="p">(</span><span class="s2">&quot;loading&quot;</span><span class="p">);</span></div><div class='line' id='LC985'>			<span class="k">this</span><span class="p">.</span><span class="nx">updateProgressBar</span><span class="p">(</span><span class="mi">100</span><span class="p">);</span></div><div class='line' id='LC986'><br/></div><div class='line' id='LC987'>			<span class="k">this</span><span class="p">.</span><span class="nx">changeNextButton</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">args</span><span class="p">.</span><span class="nx">buttons</span><span class="p">.</span><span class="nx">submittingText</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC988'>			<span class="k">this</span><span class="p">.</span><span class="nx">disableNextButton</span><span class="p">();</span></div><div class='line' id='LC989'><br/></div><div class='line' id='LC990'>			<span class="kd">var</span> <span class="nx">ret</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;submit&quot;</span><span class="p">);</span></div><div class='line' id='LC991'>			<span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;loading&quot;</span><span class="p">);</span></div><div class='line' id='LC992'>		<span class="p">},</span></div><div class='line' id='LC993'><br/></div><div class='line' id='LC994'>		<span class="nx">_onNextClick</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC995'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;handling &#39;next&#39; button click&quot;</span><span class="p">);</span></div><div class='line' id='LC996'>			<span class="kd">var</span> <span class="nx">currentCard</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">getActiveCard</span><span class="p">();</span></div><div class='line' id='LC997'>			<span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">_readyToSubmit</span> <span class="o">&amp;&amp;</span> <span class="nx">currentCard</span><span class="p">.</span><span class="nx">validate</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC998'>				<span class="k">this</span><span class="p">.</span><span class="nx">_submit</span><span class="p">();</span></div><div class='line' id='LC999'>			<span class="p">}</span></div><div class='line' id='LC1000'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1001'>				<span class="nx">currentCard</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">incrementCard</span><span class="p">();</span></div><div class='line' id='LC1002'>			<span class="p">}</span></div><div class='line' id='LC1003'>		<span class="p">},</span></div><div class='line' id='LC1004'><br/></div><div class='line' id='LC1005'>		<span class="nx">_onBackClick</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1006'>			<span class="k">this</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s2">&quot;handling &#39;back&#39; button click&quot;</span><span class="p">);</span></div><div class='line' id='LC1007'>			<span class="kd">var</span> <span class="nx">currentCard</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">decrementCard</span><span class="p">();</span></div><div class='line' id='LC1008'>		<span class="p">},</span></div><div class='line' id='LC1009'><br/></div><div class='line' id='LC1010'><br/></div><div class='line' id='LC1011'>		<span class="nx">_handleNextClick</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1012'>			<span class="kd">var</span> <span class="nx">wizard</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC1013'>			<span class="nx">wizard</span><span class="p">.</span><span class="nx">_onNextClick</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">wizard</span><span class="p">);</span></div><div class='line' id='LC1014'>		<span class="p">},</span></div><div class='line' id='LC1015'><br/></div><div class='line' id='LC1016'>		<span class="nx">_handleBackClick</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1017'>			<span class="kd">var</span> <span class="nx">wizard</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC1018'>			<span class="nx">wizard</span><span class="p">.</span><span class="nx">_onBackClick</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">wizard</span><span class="p">);</span></div><div class='line' id='LC1019'>		<span class="p">},</span></div><div class='line' id='LC1020'><br/></div><div class='line' id='LC1021'><br/></div><div class='line' id='LC1022'>		<span class="cm">/*</span></div><div class='line' id='LC1023'><span class="cm">		 * this function is attached by default to the wizard&#39;s &quot;submit&quot; event.</span></div><div class='line' id='LC1024'><span class="cm">		 * if you choose to implement your own custom submit logic, you should</span></div><div class='line' id='LC1025'><span class="cm">		 * copy how this function works</span></div><div class='line' id='LC1026'><span class="cm">		 */</span></div><div class='line' id='LC1027'>		<span class="nx">_defaultSubmit</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">wizard</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1028'>	    	<span class="nx">$</span><span class="p">.</span><span class="nx">ajax</span><span class="p">({</span></div><div class='line' id='LC1029'>	    		<span class="nx">type</span><span class="o">:</span> <span class="s2">&quot;POST&quot;</span><span class="p">,</span></div><div class='line' id='LC1030'>	    		<span class="nx">url</span><span class="o">:</span> <span class="nx">wizard</span><span class="p">.</span><span class="nx">args</span><span class="p">.</span><span class="nx">submitUrl</span><span class="p">,</span></div><div class='line' id='LC1031'>	    		<span class="nx">data</span><span class="o">:</span> <span class="nx">wizard</span><span class="p">.</span><span class="nx">serialize</span><span class="p">(),</span></div><div class='line' id='LC1032'>	    		<span class="nx">dataType</span><span class="o">:</span> <span class="s2">&quot;json&quot;</span><span class="p">,</span></div><div class='line' id='LC1033'>	    		<span class="nx">success</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">resp</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1034'>		    		<span class="nx">wizard</span><span class="p">.</span><span class="nx">submitSuccess</span><span class="p">();</span></div><div class='line' id='LC1035'>		    		<span class="nx">wizard</span><span class="p">.</span><span class="nx">hideButtons</span><span class="p">();</span></div><div class='line' id='LC1036'>		    		<span class="nx">wizard</span><span class="p">.</span><span class="nx">updateProgressBar</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC1037'>		    	<span class="p">},</span></div><div class='line' id='LC1038'>		    	<span class="nx">error</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1039'>		    		<span class="nx">wizard</span><span class="p">.</span><span class="nx">submitFailure</span><span class="p">();</span></div><div class='line' id='LC1040'>		    		<span class="nx">wizard</span><span class="p">.</span><span class="nx">hideButtons</span><span class="p">();</span></div><div class='line' id='LC1041'>		    	<span class="p">},</span></div><div class='line' id='LC1042'>	    	<span class="p">});</span></div><div class='line' id='LC1043'>		<span class="p">}</span></div><div class='line' id='LC1044'><br/></div><div class='line' id='LC1045'>	<span class="p">};</span></div><div class='line' id='LC1046'><br/></div><div class='line' id='LC1047'><span class="p">}(</span><span class="nb">window</span><span class="p">.</span><span class="nx">jQuery</span><span class="p">));</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543528" height="64" width="64">
</div>


        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="https://github.com/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.29836s from fe1.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/amoffat/bootstrap-application-wizard/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="octicon octicon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.29892' data-host='fe1'></span>
    
  </body>
</html>


  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>bootstrap-application-wizard/src/bootstrap-wizard.min.js at master · amoffat/bootstrap-application-wizard</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="xhr-socket" href="/_sockets" />


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="1128501" name="octolytics-actor-id" /><meta content="83580fb355ac06118324c4ee4c0aa53c4e56273cf722f01bf6ef1aaabb1f5b1c" name="octolytics-actor-hash" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="W8c5TJel79p1jP4cBcKO2KURxpvIcO+9tW8j/2VbJo8=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-5c7be408fce39b9ed9d174f787c73f1d9e497b50.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-883c2d036f95a0fb486a5d977a84cb0b91a58353.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-92d138f450f2960501e28397a2f63b0f100590f0.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-af722d045ae48a4eaa88da3a9a035a24422643e0.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="181cf070024d3da4f5793e9a2d7b98a5">

        <link data-pjax-transient rel='permalink' href='/amoffat/bootstrap-application-wizard/blob/3b840242e8b325e1c83cedbbf00bb0790478e9c7/src/bootstrap-wizard.min.js'>
    <meta property="og:title" content="bootstrap-application-wizard"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/amoffat/bootstrap-application-wizard"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/b2205964d196cdba00c7bdbddb7f2f8e?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="Contribute to bootstrap-application-wizard development by creating an account on GitHub."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="amoffat/bootstrap-application-wizard"/>

    <meta name="description" content="Contribute to bootstrap-application-wizard development by creating an account on GitHub." />


    <meta content="259113" name="octolytics-dimension-user_id" /><meta content="8061175" name="octolytics-dimension-repository_id" />
  <link href="https://github.com/amoffat/bootstrap-application-wizard/commits/master.atom" rel="alternate" title="Recent Commits to bootstrap-application-wizard:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public env-production  ">
    <div id="wrapper">

      

      
      
      

      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    <div class="divider-vertical"></div>

      <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="octicon octicon-gear "></span></a>

  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    data-username="ronzalo"
      data-repo="amoffat/bootstrap-application-wizard"
      data-branch="master"
      data-sha="2c8f392cc53177ee39b8cc528706637ea0d6ffc7"
  >

    <input type="hidden" name="nwo" value="amoffat/bootstrap-application-wizard" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

  <div class="divider-vertical"></div>

</form>
        <ul class="top-nav">
            <li class="explore"><a href="https://github.com/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="http://help.github.com">Help</a></li>
        </ul>
      </div>

    

  

    <ul id="user-links">
      <li>
        <a href="https://github.com/ronzalo" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/b6ca43984b11c1ad4e3b1c4125b7a210?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> ronzalo
        </a>
      </li>

        <li>
          <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
            <span class="octicon octicon-repo-create"></span>
          </a>
        </li>

        <li>
          <a href="/settings/profile" id="account_settings"
            class="tooltipped downwards"
            title="Account settings ">
            <span class="octicon octicon-tools"></span>
          </a>
        </li>
        <li>
          <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out">
            <span class="octicon octicon-log-out"></span>
          </a>
        </li>

    </ul>


<div class="js-new-dropdown-contents hidden">
  <ul class="dropdown-menu">
    <li>
      <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
    </li>
    <li>
        <a href="https://github.com/amoffat/bootstrap-application-wizard/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
    <li>
    </li>
    <li>
      <a href="/organizations/new"><span class="octicon octicon-list-unordered"></span> New organization</a>
    </li>
  </ul>
</div>


    
  </div>
</div>

      

      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              

<ul class="pagehead-actions">


    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="W8c5TJel79p1jP4cBcKO2KURxpvIcO+9tW8j/2VbJo8=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="8061175" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder js-menu-content">
        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container on">
      <a href="/amoffat/bootstrap-application-wizard/unstar" class="minibutton js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="octicon octicon-star-delete"></span>
        <span class="text">Unstar</span>
      </a>
      <a href="/amoffat/bootstrap-application-wizard/star" class="minibutton js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="octicon octicon-star"></span>
        <span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/amoffat/bootstrap-application-wizard/stargazers">1,034</a>
    </li>

        <li>
          <a href="/amoffat/bootstrap-application-wizard/fork" class="minibutton js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="facebox nofollow">
            <span class="octicon octicon-git-branch-create"></span>
            <span class="text">Fork</span>
          </a>
          <a href="/amoffat/bootstrap-application-wizard/network" class="social-count">89</a>
        </li>


</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-octicon octicon-repo"></span>
                <span class="author vcard">
                  <a href="/amoffat" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">amoffat</span>
                  </a></span> /
                <strong><a href="/amoffat/bootstrap-application-wizard" class="js-current-repository">bootstrap-application-wizard</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li class="pulse-nav"><a href="/amoffat/bootstrap-application-wizard/pulse" class="js-selected-navigation-item " data-selected-links="pulse /amoffat/bootstrap-application-wizard/pulse" rel="nofollow"><span class="octicon octicon-pulse"></span></a></li>
    <li><a href="/amoffat/bootstrap-application-wizard" class="js-selected-navigation-item selected" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /amoffat/bootstrap-application-wizard">Code</a></li>
    <li><a href="/amoffat/bootstrap-application-wizard/network" class="js-selected-navigation-item " data-selected-links="repo_network /amoffat/bootstrap-application-wizard/network">Network</a></li>
    <li><a href="/amoffat/bootstrap-application-wizard/pulls" class="js-selected-navigation-item " data-selected-links="repo_pulls /amoffat/bootstrap-application-wizard/pulls">Pull Requests <span class='counter'>1</span></a></li>

      <li><a href="/amoffat/bootstrap-application-wizard/issues" class="js-selected-navigation-item " data-selected-links="repo_issues /amoffat/bootstrap-application-wizard/issues">Issues <span class='counter'>10</span></a></li>

      <li><a href="/amoffat/bootstrap-application-wizard/wiki" class="js-selected-navigation-item " data-selected-links="repo_wiki /amoffat/bootstrap-application-wizard/wiki">Wiki</a></li>


    <li><a href="/amoffat/bootstrap-application-wizard/graphs" class="js-selected-navigation-item " data-selected-links="repo_graphs repo_contributors /amoffat/bootstrap-application-wizard/graphs">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/amoffat/bootstrap-application-wizard/tags" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_tags /amoffat/bootstrap-application-wizard/tags">Tags <span class="counter blank">0</span></a></li>
    </ul>
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="octicon octicon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/amoffat/bootstrap-application-wizard/blob/gh-pages/src/bootstrap-wizard.min.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" rel="nofollow" title="gh-pages">gh-pages</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item selected">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/amoffat/bootstrap-application-wizard/blob/master/src/bootstrap-wizard.min.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/amoffat/bootstrap-application-wizard" class="selected js-selected-navigation-item tabnav-tab" data-selected-links="repo_source /amoffat/bootstrap-application-wizard">Files</a></li>
    <li><a href="/amoffat/bootstrap-application-wizard/commits/master" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_commits /amoffat/bootstrap-application-wizard/commits/master">Commits</a></li>
    <li><a href="/amoffat/bootstrap-application-wizard/branches" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_branches /amoffat/bootstrap-application-wizard/branches" rel="nofollow">Branches <span class="counter ">2</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:ccd207f0d1019fe9f626696dca6252f2 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:ccd207f0d1019fe9f626696dca6252f2 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/amoffat/bootstrap-application-wizard" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">bootstrap-application-wizard</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/amoffat/bootstrap-application-wizard/tree/master/src" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">src</span></a></span><span class="separator"> / </span><strong class="final-path">bootstrap-wizard.min.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="src/bootstrap-wizard.min.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
        </div>

      <a href="/amoffat/bootstrap-application-wizard/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/amoffat/bootstrap-application-wizard/contributors/master/src/bootstrap-wizard.min.js">
          Fetching contributors…

          <div class="participation">
            <p class="loader-loading"><img alt="Octocat-spinner-32-eaf2f5" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif?1338956357" width="16" /></p>
            <p class="loader-error">Cannot retrieve contributors at this time</p>
          </div>
        </div>

    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/amoffat/bootstrap-application-wizard/blob/3b840242e8b325e1c83cedbbf00bb0790478e9c7/src/bootstrap-wizard.min.js" data-title="bootstrap-application-wizard/src/bootstrap-wizard.min.js at master · amoffat/bootstrap-application-wizard · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="octicon octicon-file-text"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>1 lines (1 sloc)</span>
                <span>15.316 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                        <a class="minibutton tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/amoffat/bootstrap-application-wizard/edit/master/src/bootstrap-wizard.min.js"
                           data-method="post" rel="nofollow">Edit</a>
                  <a href="/amoffat/bootstrap-application-wizard/raw/master/src/bootstrap-wizard.min.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/amoffat/bootstrap-application-wizard/blame/master/src/bootstrap-wizard.min.js" class="button minibutton ">Blame</a>
                  <a href="/amoffat/bootstrap-application-wizard/commits/master/src/bootstrap-wizard.min.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>

          </td>
          <td class="blob-line-code">
                <div class='line' id='LC1'>(function(a){a.fn.wizard=function(b){return new Wizard(this,b)};a.fn.wizard.logging=false;WizardCard=function(f,c,b,e,d){this.wizard=f;this.index=b;this.prev=e;this.next=d;this.el=c;this.title=c.find(&quot;h3&quot;).first().text();this.name=c.data(&quot;cardname&quot;)||this.title;this.nav=this._createNavElement(this.title,b);this._disabled=false;this._loaded=false;this._events={}};WizardCard.prototype={select:function(){this.log(&quot;selecting&quot;);if(!this.isSelected()){this.nav.addClass(&quot;active&quot;);this.el.show();if(!this._loaded){this.trigger(&quot;loaded&quot;);this.reload()}this.trigger(&quot;selected&quot;)}var b=this.wizard;if(this.index&gt;=b._cards.length-1){this.log(&quot;on last card, changing next button to submit&quot;);b.changeNextButton(b.args.buttons.submitText,&quot;btn-success&quot;);b._readyToSubmit=true;b.trigger(&quot;readySubmit&quot;)}else{b._readyToSubmit=false;if(this.index==0){b.backButton.toggleClass(&quot;disabled&quot;,true)}else{b.backButton.toggleClass(&quot;disabled&quot;,false)}b.changeNextButton(b.args.buttons.nextText,&quot;btn-primary&quot;)}return this},_createNavElement:function(d,e){var b=a(&#39;&lt;li class=&quot;wizard-nav-item&quot;&gt;&lt;/li&gt;&#39;);var c=a(&#39;&lt;a class=&quot;wizard-nav-link&quot;&gt;&lt;/a&gt;&#39;);c.data(&quot;navindex&quot;,e);b.append(c);c.append(&#39;&lt;i class=&quot;icon-chevron-right&quot;&gt;&lt;/i&gt;&#39;);c.append(d);return b},markVisited:function(){this.log(&quot;marking as visited&quot;);this.nav.addClass(&quot;already-visited&quot;);this.trigger(&quot;markVisited&quot;);return this},unmarkVisited:function(){this.log(&quot;unmarking as visited&quot;);this.nav.removeClass(&quot;already-visited&quot;);this.trigger(&quot;unmarkVisited&quot;);return this},deselect:function(){this.nav.removeClass(&quot;active&quot;);this.el.hide();this.trigger(&quot;deselect&quot;);return this},enable:function(){this.log(&quot;enabling&quot;);this.nav.addClass(&quot;active&quot;);this._disabled=false;this.trigger(&quot;enabled&quot;);return this},disable:function(b){this.log(&quot;disabling&quot;);this._disabled=true;this.nav.removeClass(&quot;active already-visited&quot;);if(b){this.el.hide()}this.trigger(&quot;disabled&quot;);return this},isDisabled:function(){return this._disabled},alreadyVisited:function(){return this.nav.hasClass(&quot;already-visited&quot;)},isSelected:function(){return this.nav.hasClass(&quot;active&quot;)},reload:function(){this._loaded=true;this.trigger(&quot;reload&quot;);return this},on:function(){return this.wizard.on.apply(this,arguments)},trigger:function(){this.callListener(&quot;on&quot;+arguments[0]);return this.wizard.trigger.apply(this,arguments)},toggleAlert:function(d,b){this.log(&quot;toggling alert to: &quot;+b);b=typeof(b)==&quot;undefined&quot;?true:b;if(b){this.trigger(&quot;showAlert&quot;)}else{this.trigger(&quot;hideAlert&quot;)}var e;var c=this.el.children(&quot;h3&quot;).first().next(&quot;div.alert&quot;);if(c.length==0){if(!b){return this}this.log(&quot;couldn&#39;t find existing alert div, creating one&quot;);e=a(&quot;&lt;div /&gt;&quot;);e.addClass(&quot;alert&quot;);e.addClass(&quot;hide&quot;);e.insertAfter(this.el.find(&quot;h3&quot;).first())}else{this.log(&quot;found existing alert div&quot;);e=c.first()}if(b){if(d!=null){this.log(&quot;setting alert msg to&quot;,d);e.html(d)}e.show()}else{e.hide()}return this},callListener:function(c){c=c.toLowerCase();this.log(&quot;looking for listener &quot;+c);var f=window[this.el.data(c)];if(f){this.log(&quot;calling listener &quot;+c);var d=this.wizard;try{var b=f(this)}catch(g){this.log(&quot;exception calling listener &quot;+c+&quot;: &quot;,g)}}else{this.log(&quot;didn&#39;t find listener &quot;+c)}},problem:function(b){this.nav.find(&quot;a&quot;).toggleClass(&quot;wizard-step-error&quot;,b)},validate:function(){var e=false;var d=this;this.el.find(&quot;[data-validate]&quot;).each(function(l,m){d.log(&quot;validating individiual inputs&quot;);m=a(m);var j=m.data(&quot;validate&quot;);if(!j){return}var k={status:true,title:&quot;Error&quot;,msg:&quot;&quot;};var h=window[j](m);a.extend(k,h);if(!k.status){e=true;m.parent(&quot;.control-group&quot;).toggleClass(&quot;error&quot;,true);d.wizard.errorPopover(m,k.msg)}else{m.parent(&quot;.control-group&quot;).toggleClass(&quot;error&quot;,false);try{m.popover(&quot;destroy&quot;)}catch(n){m.popover(&quot;hide&quot;)}}});this.log(&quot;after validating inputs, failures is&quot;,e);var c=window[this.el.data(&quot;validate&quot;)];if(c){this.log(&quot;running html-embedded card validator&quot;);var f=c(this);if(typeof(f)==&quot;undefined&quot;||f==null){f=true}if(!f){e=true}this.log(&quot;after running html-embedded card validator, failures is&quot;,e)}this.log(&quot;running listener validator&quot;);var b=this.trigger(&quot;validate&quot;);if(typeof(b)==&quot;undefined&quot;||b==null){b=true}if(!b){e=true}this.log(&quot;after running listener validator, failures is&quot;,e);var g=!e;if(g){this.log(&quot;validated, calling listeners&quot;);this.trigger(&quot;validated&quot;)}else{this.log(&quot;invalid&quot;);this.trigger(&quot;invalid&quot;)}return g},log:function(){if(!window.console||!a.fn.wizard.logging){return}var b=&quot;card &#39;&quot;+this.name+&quot;&#39;: &quot;;var c=[b];c.push.apply(c,arguments);console.log.apply(console,c)},isActive:function(){return this.nav.hasClass(&quot;active&quot;)},};Wizard=function(d,e){var i=[&#39;&lt;div class=&quot;modal hide wizard-modal&quot; role=&quot;dialog&quot;&gt;&#39;,&#39;&lt;div class=&quot;wizard-modal-header modal-header&quot;&gt;&#39;,&#39;&lt;button class=&quot;wizard-close close&quot; type=&quot;button&quot;&gt;x&lt;/button&gt;&#39;,&#39;&lt;h3 class=&quot;wizard-title&quot;&gt;&lt;/h3&gt;&#39;,&#39;&lt;span class=&quot;wizard-subtitle&quot;&gt;&lt;/span&gt;&#39;,&quot;&lt;/div&gt;&quot;,&#39;&lt;div class=&quot;pull-left wizard-steps&quot;&gt;&#39;,&#39;&lt;div class=&quot;wizard-nav-container&quot;&gt;&#39;,&#39;&lt;ul class=&quot;nav nav-list&quot; style=&quot;padding-bottom:30px;&quot;&gt;&#39;,&quot;&lt;/ul&gt;&quot;,&quot;&lt;/div&gt;&quot;,&#39;&lt;div class=&quot;wizard-progress-container&quot;&gt;&#39;,,&#39;&lt;div class=&quot;progress progress-striped&quot;&gt;&#39;,&#39;&lt;div class=&quot;bar&quot;&gt;&lt;/div&gt;&#39;,&quot;&lt;/div&gt;&quot;,&quot;&lt;/div&gt;&quot;,&quot;&lt;/div&gt;&quot;,&quot;&lt;form&gt;&quot;,&#39;&lt;div class=&quot;wizard-cards&quot;&gt;&#39;,&#39;&lt;div class=&quot;wizard-card-container&quot;&gt;&#39;,&quot;&lt;/div&gt;&quot;,&#39;&lt;div class=&quot;wizard-modal-footer&quot;&gt;&#39;,&#39;&lt;div class=&quot;wizard-buttons-container&quot;&gt;&#39;,&#39;&lt;button class=&quot;btn wizard-back&quot; type=&quot;button&quot;&gt;Back&lt;/button&gt;&#39;,&#39;&lt;button class=&quot;btn btn-primary wizard-next&quot; type=&quot;button&quot;&gt;Next&lt;/button&gt;&#39;,&quot;&lt;/div&gt;&quot;,&quot;&lt;/div&gt;&quot;,&quot;&lt;/div&gt;&quot;,&quot;&lt;/form&gt;&quot;,&quot;&lt;/div&gt;&quot;];this.args={submitUrl:&quot;&quot;,width:750,progressBarCurrent:false,increaseHeight:0,buttons:{nextText:&quot;Next&quot;,backText:&quot;Back&quot;,submitText:&quot;Submit&quot;,submittingText:&quot;Submitting...&quot;,}};a.extend(this.args,e||{});this.markup=a(d);this.submitCards=this.markup.find(&quot;.wizard-error,.wizard-failure,.wizard-success,.wizard-loading&quot;);this.el=a(i.join(&quot;\n&quot;));this.el.find(&quot;.wizard-card-container&quot;).append(this.markup.find(&quot;.wizard-card&quot;)).append(this.submitCards);a(&quot;body&quot;).append(this.el);this.closeButton=this.el.find(&quot;button.wizard-close&quot;);this.footer=this.el.find(&quot;.wizard-modal-footer&quot;);this.backButton=this.footer.find(&quot;.wizard-back&quot;);this.nextButton=this.footer.find(&quot;.wizard-next&quot;);this.progress=this.el.find(&quot;.progress&quot;);this._cards=[];this.cards={};this._readyToSubmit=false;this.percentComplete=0;this._submitting=false;this._events={};this._firstShow=true;this._createCards();this.nextButton.click(this,this._handleNextClick);this.backButton.click(this,this._handleBackClick);this.backButton.text(this.args.buttons.backText);this.nextButton.text(this.args.buttons.nextText);var b=360;var h=b+this.args.increaseHeight;this.el.find(&quot;.wizard-nav-container&quot;).css(&quot;height&quot;,h);this.el.find(&quot;.wizard-steps&quot;).css(&quot;height&quot;,(h+65)+&quot;px&quot;);this.el.find(&quot;.wizard-card&quot;).css(&quot;height&quot;,(h-60)+&quot;px&quot;);this.submitCards.css(&quot;height&quot;,(h-60)+&quot;px&quot;);this.el.css(&quot;margin-top&quot;,-(this.el.height()/2));this.el.css(&quot;width&quot;,this.args.width);this.el.css(&quot;margin-left&quot;,-(this.args.width/2));if(a.fn.slimScroll&amp;&amp;false){var f={position:&quot;left&quot;,height:&quot;360px&quot;,size:&quot;8px&quot;,distance:&quot;5px&quot;,railVisible:true,disableFadeOut:true,};a.extend(f,this.args.slimScroll||{});this.el.find(&quot;.wizard-nav-container&quot;).slimScroll(f)}var c=this;this.closeButton.click(function(){c.reset();c.close()});this.el.find(&quot;.wizard-steps&quot;).on(&quot;click&quot;,&quot;li.already-visited a.wizard-nav-link&quot;,this,function(k){var j=parseInt(a(k.target).data(&quot;navindex&quot;));k.data.setCard(j)});var g=this.markup.children(&quot;h1&quot;).first();if(g.length){this.setTitle(g.text())}this.on(&quot;submit&quot;,this._defaultSubmit)};Wizard.prototype={errorPopover:function(b,d){this.log(&quot;launching popover on&quot;,b);var c=b.popover({content:d,trigger:&quot;manual&quot;}).popover(&quot;show&quot;).next(&quot;.popover&quot;);c.addClass(&quot;error-popover&quot;);return c},destroyPopover:function(b){b=a(b);b.parent(&quot;.control-group&quot;).toggleClass(&quot;error&quot;,false);var c=b.prev();try{c.popover(&quot;destroy&quot;)}catch(d){c.popover(&quot;hide&quot;)}},hidePopovers:function(c,d){this.log(&quot;hiding all popovers&quot;);var b=this;this.el.find(&quot;.error-popover&quot;).each(function(e,f){b.destroyPopover(f)})},eachCard:function(b){a.each(this._cards,b);return this},getActiveCard:function(){this.log(&quot;getting active card&quot;);var b=null;a.each(this._cards,function(d,c){if(c.isActive()){b=c;return false}});if(b){this.log(&quot;found active card&quot;,b)}else{this.log(&quot;couldn&#39;t find an active card&quot;)}return b},setTitle:function(b){this.log(&quot;setting title to&quot;,b);this.el.find(&quot;.wizard-title&quot;).first().text(b);return this},setSubtitle:function(b){this.log(&quot;setting subtitle to&quot;,b);this.el.find(&quot;.wizard-subtitle&quot;).first().text(b);return this},changeNextButton:function(c,b){this.log(&quot;changing next button, text: &quot;+c,&quot;class: &quot;+b);if(typeof(b)!=&quot;undefined&quot;){this.nextButton.removeClass(&quot;btn-success btn-primary&quot;)}if(b){this.nextButton.addClass(b)}this.nextButton.text(c);return this},hide:function(){this.log(&quot;hiding&quot;);this.el.modal(&quot;hide&quot;);return this},close:function(){this.log(&quot;closing&quot;);this.el.modal(&quot;hide&quot;);return this},show:function(){this.log(&quot;showing&quot;);if(this._firstShow){this.setCard(0);this._firstShow=false}this.el.modal();return this},on:function(b,c){this.log(&quot;adding listener to event &quot;+b);this._events[b]=c;return this},trigger:function(){var d=arguments[0];var c=Array.prototype.slice.call(arguments);c.shift();c.unshift(this);this.log(&quot;firing event &quot;+d);var f=this._events[d];var b=null;if(typeof(f)==&quot;function&quot;){this.log(&quot;found event handler, calling &quot;+d);try{b=f.apply(this,c)}catch(g){this.log(&quot;event handler &quot;+d+&quot; had an exception&quot;)}}else{this.log(&quot;couldn&#39;t find an event handler for &quot;+d)}return b},reset:function(){this.log(&quot;resetting&quot;);this.updateProgressBar(0);this.hideSubmitCards();this.setCard(0);this.lockCards();this.enableNextButton();this.showButtons();this.hidePopovers();this.trigger(&quot;reset&quot;);return this},log:function(){if(!window.console||!a.fn.wizard.logging){return}var b=&quot;wizard &quot;+this.el.id+&quot;: &quot;;var c=[b];c.push.apply(c,arguments);console.log.apply(console,c)},_abstractIncrementStep:function(d,e){var c=this.getActiveCard();var b;if(c){this.log(&quot;searching for valid next card&quot;);while(true){b=e(c);if(b){this.log(&quot;looking at card&quot;,b.index);if(b.isDisabled()){this.log(&quot;card &quot;+b.index+&quot; is disabled/locked, continuing&quot;);c=b;continue}else{return this.setCard(c.index+d)}}else{this.log(&quot;next card is not defined, breaking&quot;);break}}}else{this.log(&quot;current card is undefined&quot;)}},incrementCard:function(){this.log(&quot;incrementing card&quot;);var b=this._abstractIncrementStep(1,function(c){return c.next});this.trigger(&quot;incrementCard&quot;);return b},decrementCard:function(){this.log(&quot;decrementing card&quot;);var b=this._abstractIncrementStep(-1,function(c){return c.prev});this.trigger(&quot;decrementCard&quot;);return b},setCard:function(g){this.log(&quot;setting card to &quot;+g);this.hideSubmitCards();var c=this.getActiveCard();if(this._submitting){this.log(&quot;we&#39;re submitting the wizard already, can&#39;t change cards&quot;);return c}var b=this._cards[g];if(b){if(b.isDisabled()){this.log(&quot;new card is currently disabled, returning&quot;);return c}if(c){if(g&gt;c.index){var d=c;var f=false;while(d.index!=b.index){if(d.index!=c.index){d.prev.deselect();d.prev.markVisited();d.select()}f=d.validate();if(!f){return d}d=d.next}d.prev.deselect();d.prev.markVisited()}c.deselect();c.markVisited()}b.select();if(this.args.progressBarCurrent){var e=this.percentComplete;this.percentComplete=g*100/this._cards.length;this.updateProgressBar(this.percentComplete)}else{var e=this.percentComplete;this.percentComplete=g*100/this._cards.length;this.percentComplete=Math.max(e,this.percentComplete);this.updateProgressBar(this.percentComplete)}return b}else{this.log(&quot;couldn&#39;t find card &quot;+g)}},updateProgressBar:function(b){this.log(&quot;updating progress to &quot;+b+&quot;%&quot;);this.progress.find(&quot;.bar&quot;).css({width:b+&quot;%&quot;});this.percentComplete=b;this.trigger(&quot;progressBar&quot;,b);if(b==100){this.log(&quot;progress is 100, animating progress bar&quot;);this.progress.addClass(&quot;active&quot;)}else{if(b==0){this.log(&quot;progress is 0, disabling animation&quot;);this.progress.removeClass(&quot;active&quot;)}}},getNextCard:function(){var b=this.getActiveCard();if(b){return b.next}},lockCards:function(){this.log(&quot;locking nav cards&quot;);this.eachCard(function(c,b){b.unmarkVisited()});return this},disableCards:function(){this.log(&quot;disabling all nav cards&quot;);this.eachCard(function(c,b){b.disable()});return this},enableCards:function(){this.log(&quot;enabling all nav cards&quot;);this.eachCard(function(c,b){b.enable()});return this},hideCards:function(){this.log(&quot;hiding cards&quot;);this.eachCard(function(c,b){b.deselect()});this.hideSubmitCards();return this},hideButtons:function(){this.log(&quot;hiding buttons&quot;);this.nextButton.hide();this.backButton.hide();return this},showButtons:function(){this.log(&quot;showing buttons&quot;);this.nextButton.show();this.backButton.show();return this},getCard:function(c){var b=a(c).parents(&quot;.wizard-card&quot;).first()[0];if(b){var d=null;this.eachCard(function(f,e){if(b==e.el[0]){d=e;return false}return true});return d}else{return null}},_createCards:function(){var f=null;var d=null;var e=0;var b=null;var g=this;var c=this;var h=this.el.find(&quot;.wizard-cards .wizard-card&quot;);a.each(h,function(k,j){j=a(j);f=b;b=new WizardCard(g,j,k,f,d);c._cards.push(b);if(b.name){c.cards[b.name]=b}if(f){f.next=b}c.el.find(&quot;.wizard-steps .nav-list&quot;).append(b.nav)})},showSubmitCard:function(c){this.log(&quot;showing &quot;+c+&quot; submit card&quot;);var b=this.el.find(&quot;.wizard-&quot;+c);if(b.length){this.hideCards();this.el.find(&quot;.wizard-&quot;+c).show()}else{this.log(&quot;couldn&#39;t find submit card &quot;+c)}},hideSubmitCard:function(b){this.log(&quot;hiding &quot;+b+&quot; submit card&quot;);this.el.find(&quot;.wizard-&quot;+b).hide()},hideSubmitCards:function(){var b=this;a.each([&quot;success&quot;,&quot;error&quot;,&quot;failure&quot;,&quot;loading&quot;],function(d,c){b.hideSubmitCard(c)})},enableNextButton:function(){this.log(&quot;enabling next button&quot;);this.nextButton.removeAttr(&quot;disabled&quot;);return this},disableNextButton:function(){this.log(&quot;disabling next button&quot;);this.nextButton.attr(&quot;disabled&quot;,&quot;disabled&quot;);return this},serializeArray:function(){var b=this.el.children(&quot;form&quot;).first();return b.serializeArray()},serialize:function(){var b=this.el.children(&quot;form&quot;).first();return b.serialize()},submitSuccess:function(){this.log(&quot;submit success&quot;);this._submitting=false;this.showSubmitCard(&quot;success&quot;);this.trigger(&quot;submitSuccess&quot;)},submitFailure:function(){this.log(&quot;submit failure&quot;);this._submitting=false;this.showSubmitCard(&quot;failure&quot;);this.trigger(&quot;submitFailure&quot;)},submitError:function(){this.log(&quot;submit error&quot;);this._submitting=false;this.showSubmitCard(&quot;error&quot;);this.trigger(&quot;submitError&quot;)},_submit:function(){this.log(&quot;submitting wizard&quot;);this._submitting=true;this.lockCards();this.backButton.hide();this.showSubmitCard(&quot;loading&quot;);this.updateProgressBar(100);this.changeNextButton(this.args.buttons.submittingText,false);this.disableNextButton();var b=this.trigger(&quot;submit&quot;);this.trigger(&quot;loading&quot;)},_onNextClick:function(){this.log(&quot;handling &#39;next&#39; button click&quot;);var b=this.getActiveCard();if(this._readyToSubmit&amp;&amp;b.validate()){this._submit()}else{b=this.incrementCard()}},_onBackClick:function(){this.log(&quot;handling &#39;back&#39; button click&quot;);var b=this.decrementCard()},_handleNextClick:function(b){var c=b.data;c._onNextClick.call(c)},_handleBackClick:function(b){var c=b.data;c._onBackClick.call(c)},_defaultSubmit:function(b){a.ajax({type:&quot;POST&quot;,url:b.args.submitUrl,data:b.serialize(),dataType:&quot;json&quot;,success:function(c){b.submitSuccess();b.hideButtons();b.updateProgressBar(0)},error:function(){b.submitFailure();b.hideButtons()},})}}}(window.jQuery));</div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543528" height="64" width="64">
</div>


        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="https://github.com/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.10555s from fe1.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/amoffat/bootstrap-application-wizard/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="octicon octicon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.10611' data-host='fe1'></span>
    
  </body>
</html>


/*!
* Bootstrap.js by @fat & @mdo
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(e){"use strict";e(function(){e.support.transition=function(){var e=function(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},n;for(n in t)if(e.style[n]!==undefined)return t[n]}();return e&&{end:e}}()})}(window.jQuery),!function(e){"use strict";var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function s(){i.trigger("closed").remove()}var n=e(this),r=n.attr("data-target"),i;r||(r=n.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),i=e(r),t&&t.preventDefault(),i.length||(i=n.hasClass("alert")?n:n.parent()),i.trigger(t=e.Event("close"));if(t.isDefaultPrevented())return;i.removeClass("in"),e.support.transition&&i.hasClass("fade")?i.on(e.support.transition.end,s):s()};var r=e.fn.alert;e.fn.alert=function(t){return this.each(function(){var r=e(this),i=r.data("alert");i||r.data("alert",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.alert.Constructor=n,e.fn.alert.noConflict=function(){return e.fn.alert=r,this},e(document).on("click.alert.data-api",t,n.prototype.close)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.button.defaults,n)};t.prototype.setState=function(e){var t="disabled",n=this.$element,r=n.data(),i=n.is("input")?"val":"html";e+="Text",r.resetText||n.data("resetText",n[i]()),n[i](r[e]||this.options[e]),setTimeout(function(){e=="loadingText"?n.addClass(t).attr(t,t):n.removeClass(t).removeAttr(t)},0)},t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons-radio"]');e&&e.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=e.fn.button;e.fn.button=function(n){return this.each(function(){var r=e(this),i=r.data("button"),s=typeof n=="object"&&n;i||r.data("button",i=new t(this,s)),n=="toggle"?i.toggle():n&&i.setState(n)})},e.fn.button.defaults={loadingText:"loading..."},e.fn.button.Constructor=t,e.fn.button.noConflict=function(){return e.fn.button=n,this},e(document).on("click.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.options.pause=="hover"&&this.$element.on("mouseenter",e.proxy(this.pause,this)).on("mouseleave",e.proxy(this.cycle,this))};t.prototype={cycle:function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(t){var n=this.getActiveIndex(),r=this;if(t>this.$items.length-1||t<0)return;return this.sliding?this.$element.one("slid",function(){r.to(t)}):n==t?this.pause().cycle():this.slide(t>n?"next":"prev",e(this.$items[t]))},pause:function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition.end&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(t,n){var r=this.$element.find(".item.active"),i=n||r[t](),s=this.interval,o=t=="next"?"left":"right",u=t=="next"?"first":"last",a=this,f;this.sliding=!0,s&&this.pause(),i=i.length?i:this.$element.find(".item")[u](),f=e.Event("slide",{relatedTarget:i[0],direction:o});if(i.hasClass("active"))return;this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var t=e(a.$indicators.children()[a.getActiveIndex()]);t&&t.addClass("active")}));if(e.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(f);if(f.isDefaultPrevented())return;i.addClass(t),i[0].offsetWidth,r.addClass(o),i.addClass(o),this.$element.one(e.support.transition.end,function(){i.removeClass([t,o].join(" ")).addClass("active"),r.removeClass(["active",o].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger("slid")},0)})}else{this.$element.trigger(f);if(f.isDefaultPrevented())return;r.removeClass("active"),i.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}};var n=e.fn.carousel;e.fn.carousel=function(n){return this.each(function(){var r=e(this),i=r.data("carousel"),s=e.extend({},e.fn.carousel.defaults,typeof n=="object"&&n),o=typeof n=="string"?n:s.slide;i||r.data("carousel",i=new t(this,s)),typeof n=="number"?i.to(n):o?i[o]():s.interval&&i.pause().cycle()})},e.fn.carousel.defaults={interval:5e3,pause:"hover"},e.fn.carousel.Constructor=t,e.fn.carousel.noConflict=function(){return e.fn.carousel=n,this},e(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(t){var n=e(this),r,i=e(n.attr("data-target")||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,"")),s=e.extend({},i.data(),n.data()),o;i.carousel(s),(o=n.attr("data-slide-to"))&&i.data("carousel").pause().to(o).cycle(),t.preventDefault()})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.collapse.defaults,n),this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.prototype={constructor:t,dimension:function(){var e=this.$element.hasClass("width");return e?"width":"height"},show:function(){var t,n,r,i;if(this.transitioning||this.$element.hasClass("in"))return;t=this.dimension(),n=e.camelCase(["scroll",t].join("-")),r=this.$parent&&this.$parent.find("> .accordion-group > .in");if(r&&r.length){i=r.data("collapse");if(i&&i.transitioning)return;r.collapse("hide"),i||r.data("collapse",null)}this.$element[t](0),this.transition("addClass",e.Event("show"),"shown"),e.support.transition&&this.$element[t](this.$element[0][n])},hide:function(){var t;if(this.transitioning||!this.$element.hasClass("in"))return;t=this.dimension(),this.reset(this.$element[t]()),this.transition("removeClass",e.Event("hide"),"hidden"),this.$element[t](0)},reset:function(e){var t=this.dimension();return this.$element.removeClass("collapse")[t](e||"auto")[0].offsetWidth,this.$element[e!==null?"addClass":"removeClass"]("collapse"),this},transition:function(t,n,r){var i=this,s=function(){n.type=="show"&&i.reset(),i.transitioning=0,i.$element.trigger(r)};this.$element.trigger(n);if(n.isDefaultPrevented())return;this.transitioning=1,this.$element[t]("in"),e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,s):s()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var n=e.fn.collapse;e.fn.collapse=function(n){return this.each(function(){var r=e(this),i=r.data("collapse"),s=e.extend({},e.fn.collapse.defaults,r.data(),typeof n=="object"&&n);i||r.data("collapse",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.collapse.defaults={toggle:!0},e.fn.collapse.Constructor=t,e.fn.collapse.noConflict=function(){return e.fn.collapse=n,this},e(document).on("click.collapse.data-api","[data-toggle=collapse]",function(t){var n=e(this),r,i=n.attr("data-target")||t.preventDefault()||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,""),s=e(i).data("collapse")?"toggle":n.data();n[e(i).hasClass("in")?"addClass":"removeClass"]("collapsed"),e(i).collapse(s)})}(window.jQuery),!function(e){"use strict";function r(){e(t).each(function(){i(e(this)).removeClass("open")})}function i(t){var n=t.attr("data-target"),r;n||(n=t.attr("href"),n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")),r=n&&e(n);if(!r||!r.length)r=t.parent();return r}var t="[data-toggle=dropdown]",n=function(t){var n=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};n.prototype={constructor:n,toggle:function(t){var n=e(this),s,o;if(n.is(".disabled, :disabled"))return;return s=i(n),o=s.hasClass("open"),r(),o||s.toggleClass("open"),n.focus(),!1},keydown:function(n){var r,s,o,u,a,f;if(!/(38|40|27)/.test(n.keyCode))return;r=e(this),n.preventDefault(),n.stopPropagation();if(r.is(".disabled, :disabled"))return;u=i(r),a=u.hasClass("open");if(!a||a&&n.keyCode==27)return n.which==27&&u.find(t).focus(),r.click();s=e("[role=menu] li:not(.divider):visible a",u);if(!s.length)return;f=s.index(s.filter(":focus")),n.keyCode==38&&f>0&&f--,n.keyCode==40&&f<s.length-1&&f++,~f||(f=0),s.eq(f).focus()}};var s=e.fn.dropdown;e.fn.dropdown=function(t){return this.each(function(){var r=e(this),i=r.data("dropdown");i||r.data("dropdown",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.dropdown.Constructor=n,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=s,this},e(document).on("click.dropdown.data-api",r).on("click.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.dropdown-menu",function(e){e.stopPropagation()}).on("click.dropdown.data-api",t,n.prototype.toggle).on("keydown.dropdown.data-api",t+", [role=menu]",n.prototype.keydown)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=n,this.$element=e(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};t.prototype={constructor:t,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var t=this,n=e.Event("show");this.$element.trigger(n);if(this.isShown||n.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var n=e.support.transition&&t.$element.hasClass("fade");t.$element.parent().length||t.$element.appendTo(document.body),t.$element.show(),n&&t.$element[0].offsetWidth,t.$element.addClass("in").attr("aria-hidden",!1),t.enforceFocus(),n?t.$element.one(e.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")})},hide:function(t){t&&t.preventDefault();var n=this;t=e.Event("hide"),this.$element.trigger(t);if(!this.isShown||t.isDefaultPrevented())return;this.isShown=!1,this.escape(),e(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var t=this;e(document).on("focusin.modal",function(e){t.$element[0]!==e.target&&!t.$element.has(e.target).length&&t.$element.focus()})},escape:function(){var e=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(t){t.which==27&&e.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var t=this,n=setTimeout(function(){t.$element.off(e.support.transition.end),t.hideModal()},500);this.$element.one(e.support.transition.end,function(){clearTimeout(n),t.hideModal()})},hideModal:function(){var e=this;this.$element.hide(),this.backdrop(function(){e.removeBackdrop(),e.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(t){var n=this,r=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=e.support.transition&&r;this.$backdrop=e('<div class="modal-backdrop '+r+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?e.proxy(this.$element[0].focus,this.$element[0]):e.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!t)return;i?this.$backdrop.one(e.support.transition.end,t):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,t):t()):t&&t()}};var n=e.fn.modal;e.fn.modal=function(n){return this.each(function(){var r=e(this),i=r.data("modal"),s=e.extend({},e.fn.modal.defaults,r.data(),typeof n=="object"&&n);i||r.data("modal",i=new t(this,s)),typeof n=="string"?i[n]():s.show&&i.show()})},e.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},e.fn.modal.Constructor=t,e.fn.modal.noConflict=function(){return e.fn.modal=n,this},e(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),r=n.attr("href"),i=e(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},i.data(),n.data());t.preventDefault(),i.modal(s).one("hide",function(){n.focus()})})}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,n,r){var i,s,o,u,a;this.type=t,this.$element=e(n),this.options=this.getOptions(r),this.enabled=!0,o=this.options.trigger.split(" ");for(a=o.length;a--;)u=o[a],u=="click"?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):u!="manual"&&(i=u=="hover"?"mouseenter":"focus",s=u=="hover"?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,e.proxy(this.leave,this)));this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return t=e.extend({},e.fn[this.type].defaults,this.$element.data(),t),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var n=e.fn[this.type].defaults,r={},i;this._options&&e.each(this._options,function(e,t){n[e]!=t&&(r[e]=t)},this),i=e(t.currentTarget)[this.type](r).data(this.type);if(!i.options.delay||!i.options.delay.show)return i.show();clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout(function(){i.hoverState=="in"&&i.show()},i.options.delay.show)},leave:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!n.options.delay||!n.options.delay.hide)return n.hide();n.hoverState="out",this.timeout=setTimeout(function(){n.hoverState=="out"&&n.hide()},n.options.delay.hide)},show:function(){var t,n,r,i,s,o,u=e.Event("show");if(this.hasContent()&&this.enabled){this.$element.trigger(u);if(u.isDefaultPrevented())return;t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),s=typeof this.options.placement=="function"?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,t.detach().css({top:0,left:0,display:"block"}),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),n=this.getPosition(),r=t[0].offsetWidth,i=t[0].offsetHeight;switch(s){case"bottom":o={top:n.top+n.height,left:n.left+n.width/2-r/2};break;case"top":o={top:n.top-i,left:n.left+n.width/2-r/2};break;case"left":o={top:n.top+n.height/2-i/2,left:n.left-r};break;case"right":o={top:n.top+n.height/2-i/2,left:n.left+n.width}}this.applyPlacement(o,s),this.$element.trigger("shown")}},applyPlacement:function(e,t){var n=this.tip(),r=n[0].offsetWidth,i=n[0].offsetHeight,s,o,u,a;n.offset(e).addClass(t).addClass("in"),s=n[0].offsetWidth,o=n[0].offsetHeight,t=="top"&&o!=i&&(e.top=e.top+i-o,a=!0),t=="bottom"||t=="top"?(u=0,e.left<0&&(u=e.left*-2,e.left=0,n.offset(e),s=n[0].offsetWidth,o=n[0].offsetHeight),this.replaceArrow(u-r+s,s,"left")):this.replaceArrow(o-i,o,"top"),a&&n.offset(e)},replaceArrow:function(e,t,n){this.arrow().css(n,e?50*(1-e/t)+"%":"")},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){function i(){var t=setTimeout(function(){n.off(e.support.transition.end).detach()},500);n.one(e.support.transition.end,function(){clearTimeout(t),n.detach()})}var t=this,n=this.tip(),r=e.Event("hide");this.$element.trigger(r);if(r.isDefaultPrevented())return;return n.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?i():n.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0];return e.extend({},typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},getTitle:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title),e},tip:function(){return this.$tip=this.$tip||e(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var n=t?e(t.currentTarget)[this.type](this._options).data(this.type):this;n.tip().hasClass("in")?n.hide():n.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var n=e.fn.tooltip;e.fn.tooltip=function(n){return this.each(function(){var r=e(this),i=r.data("tooltip"),s=typeof n=="object"&&n;i||r.data("tooltip",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.fn.tooltip.noConflict=function(){return e.fn.tooltip=n,this}}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("popover",e,t)};t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype,{constructor:t,setContent:function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content")[this.options.html?"html":"text"](n),e.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var e,t=this.$element,n=this.options;return e=(typeof n.content=="function"?n.content.call(t[0]):n.content)||t.attr("data-content"),e},tip:function(){return this.$tip||(this.$tip=e(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var n=e.fn.popover;e.fn.popover=function(n){return this.each(function(){var r=e(this),i=r.data("popover"),s=typeof n=="object"&&n;i||r.data("popover",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.popover.Constructor=t,e.fn.popover.defaults=e.extend({},e.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.fn.popover.noConflict=function(){return e.fn.popover=n,this}}(window.jQuery),!function(e){"use strict";function t(t,n){var r=e.proxy(this.process,this),i=e(t).is("body")?e(window):e(t),s;this.options=e.extend({},e.fn.scrollspy.defaults,n),this.$scrollElement=i.on("scroll.scroll-spy.data-api",r),this.selector=(this.options.target||(s=e(t).attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=e("body"),this.refresh(),this.process()}t.prototype={constructor:t,refresh:function(){var t=this,n;this.offsets=e([]),this.targets=e([]),n=this.$body.find(this.selector).map(function(){var n=e(this),r=n.data("target")||n.attr("href"),i=/^#\w/.test(r)&&e(r);return i&&i.length&&[[i.position().top+(!e.isWindow(t.$scrollElement.get(0))&&t.$scrollElement.scrollTop()),r]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},process:function(){var e=this.$scrollElement.scrollTop()+this.options.offset,t=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,n=t-this.$scrollElement.height(),r=this.offsets,i=this.targets,s=this.activeTarget,o;if(e>=n)return s!=(o=i.last()[0])&&this.activate(o);for(o=r.length;o--;)s!=i[o]&&e>=r[o]&&(!r[o+1]||e<=r[o+1])&&this.activate(i[o])},activate:function(t){var n,r;this.activeTarget=t,e(this.selector).parent(".active").removeClass("active"),r=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',n=e(r).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}};var n=e.fn.scrollspy;e.fn.scrollspy=function(n){return this.each(function(){var r=e(this),i=r.data("scrollspy"),s=typeof n=="object"&&n;i||r.data("scrollspy",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.defaults={offset:10},e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=n,this},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery),!function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype={constructor:t,show:function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),r=t.attr("data-target"),i,s,o;r||(r=t.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));if(t.parent("li").hasClass("active"))return;i=n.find(".active:last a")[0],o=e.Event("show",{relatedTarget:i}),t.trigger(o);if(o.isDefaultPrevented())return;s=e(r),this.activate(t.parent("li"),n),this.activate(s,s.parent(),function(){t.trigger({type:"shown",relatedTarget:i})})},activate:function(t,n,r){function o(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),r&&r()}var i=n.find("> .active"),s=r&&e.support.transition&&i.hasClass("fade");s?i.one(e.support.transition.end,o):o(),i.removeClass("in")}};var n=e.fn.tab;e.fn.tab=function(n){return this.each(function(){var r=e(this),i=r.data("tab");i||r.data("tab",i=new t(this)),typeof n=="string"&&i[n]()})},e.fn.tab.Constructor=t,e.fn.tab.noConflict=function(){return e.fn.tab=n,this},e(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=e(this.options.menu),this.shown=!1,this.listen()};t.prototype={constructor:t,select:function(){var e=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(e)).change(),this.hide()},updater:function(e){return e},show:function(){var t=e.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:t.top+t.height,left:t.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(t){var n;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(n=e.isFunction(this.source)?this.source(this.query,e.proxy(this.process,this)):this.source,n?this.process(n):this)},process:function(t){var n=this;return t=e.grep(t,function(e){return n.matcher(e)}),t=this.sorter(t),t.length?this.render(t.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(e){return~e.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(e){var t=[],n=[],r=[],i;while(i=e.shift())i.toLowerCase().indexOf(this.query.toLowerCase())?~i.indexOf(this.query)?n.push(i):r.push(i):t.push(i);return t.concat(n,r)},highlighter:function(e){var t=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return e.replace(new RegExp("("+t+")","ig"),function(e,t){return"<strong>"+t+"</strong>"})},render:function(t){var n=this;return t=e(t).map(function(t,r){return t=e(n.options.item).attr("data-value",r),t.find("a").html(n.highlighter(r)),t[0]}),t.first().addClass("active"),this.$menu.html(t),this},next:function(t){var n=this.$menu.find(".active").removeClass("active"),r=n.next();r.length||(r=e(this.$menu.find("li")[0])),r.addClass("active")},prev:function(e){var t=this.$menu.find(".active").removeClass("active"),n=t.prev();n.length||(n=this.$menu.find("li").last()),n.addClass("active")},listen:function(){this.$element.on("focus",e.proxy(this.focus,this)).on("blur",e.proxy(this.blur,this)).on("keypress",e.proxy(this.keypress,this)).on("keyup",e.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",e.proxy(this.keydown,this)),this.$menu.on("click",e.proxy(this.click,this)).on("mouseenter","li",e.proxy(this.mouseenter,this)).on("mouseleave","li",e.proxy(this.mouseleave,this))},eventSupported:function(e){var t=e in this.$element;return t||(this.$element.setAttribute(e,"return;"),t=typeof this.$element[e]=="function"),t},move:function(e){if(!this.shown)return;switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 38:e.preventDefault(),this.prev();break;case 40:e.preventDefault(),this.next()}e.stopPropagation()},keydown:function(t){this.suppressKeyPressRepeat=~e.inArray(t.keyCode,[40,38,9,13,27]),this.move(t)},keypress:function(e){if(this.suppressKeyPressRepeat)return;this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}e.stopPropagation(),e.preventDefault()},focus:function(e){this.focused=!0},blur:function(e){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(e){e.stopPropagation(),e.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(t){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),e(t.currentTarget).addClass("active")},mouseleave:function(e){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var n=e.fn.typeahead;e.fn.typeahead=function(n){return this.each(function(){var r=e(this),i=r.data("typeahead"),s=typeof n=="object"&&n;i||r.data("typeahead",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},e.fn.typeahead.Constructor=t,e.fn.typeahead.noConflict=function(){return e.fn.typeahead=n,this},e(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(t){var n=e(this);if(n.data("typeahead"))return;n.typeahead(n.data())})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=e.extend({},e.fn.affix.defaults,n),this.$window=e(window).on("scroll.affix.data-api",e.proxy(this.checkPosition,this)).on("click.affix.data-api",e.proxy(function(){setTimeout(e.proxy(this.checkPosition,this),1)},this)),this.$element=e(t),this.checkPosition()};t.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var t=e(document).height(),n=this.$window.scrollTop(),r=this.$element.offset(),i=this.options.offset,s=i.bottom,o=i.top,u="affix affix-top affix-bottom",a;typeof i!="object"&&(s=o=i),typeof o=="function"&&(o=i.top()),typeof s=="function"&&(s=i.bottom()),a=this.unpin!=null&&n+this.unpin<=r.top?!1:s!=null&&r.top+this.$element.height()>=t-s?"bottom":o!=null&&n<=o?"top":!1;if(this.affixed===a)return;this.affixed=a,this.unpin=a=="bottom"?r.top-n:null,this.$element.removeClass(u).addClass("affix"+(a?"-"+a:""))};var n=e.fn.affix;e.fn.affix=function(n){return this.each(function(){var r=e(this),i=r.data("affix"),s=typeof n=="object"&&n;i||r.data("affix",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.affix.Constructor=t,e.fn.affix.defaults={offset:0},e.fn.affix.noConflict=function(){return e.fn.affix=n,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),n=t.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),t.affix(n)})})}(window.jQuery);
/*!
 * Smooth Scroll - v1.4.10 - 2013-03-02
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2013 Karl Swedberg
 * Licensed MIT (https://github.com/kswedberg/jquery-smooth-scroll/blob/master/LICENSE-MIT)
 */
(function(l){function t(l){return l.replace(/(:|\.)/g,"\\$1")}var e="1.4.10",o={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficent:2},r=function(t){var e=[],o=!1,r=t.dir&&"left"==t.dir?"scrollLeft":"scrollTop";return this.each(function(){if(this!=document&&this!=window){var t=l(this);t[r]()>0?e.push(this):(t[r](1),o=t[r]()>0,o&&e.push(this),t[r](0))}}),e.length||this.each(function(){"BODY"===this.nodeName&&(e=[this])}),"first"===t.el&&e.length>1&&(e=[e[0]]),e};l.fn.extend({scrollable:function(l){var t=r.call(this,{dir:l});return this.pushStack(t)},firstScrollable:function(l){var t=r.call(this,{el:"first",dir:l});return this.pushStack(t)},smoothScroll:function(e){e=e||{};var o=l.extend({},l.fn.smoothScroll.defaults,e),r=l.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(e){var n=this,s=l(this),c=o.exclude,i=o.excludeWithin,a=0,f=0,h=!0,u={},d=location.hostname===n.hostname||!n.hostname,m=o.scrollTarget||(l.smoothScroll.filterPath(n.pathname)||r)===r,p=t(n.hash);if(o.scrollTarget||d&&m&&p){for(;h&&c.length>a;)s.is(t(c[a++]))&&(h=!1);for(;h&&i.length>f;)s.closest(i[f++]).length&&(h=!1)}else h=!1;h&&(e.preventDefault(),l.extend(u,o,{scrollTarget:o.scrollTarget||p,link:n}),l.smoothScroll(u))}),this}}),l.smoothScroll=function(t,e){var o,r,n,s,c=0,i="offset",a="scrollTop",f={},h={};"number"==typeof t?(o=l.fn.smoothScroll.defaults,n=t):(o=l.extend({},l.fn.smoothScroll.defaults,t||{}),o.scrollElement&&(i="position","static"==o.scrollElement.css("position")&&o.scrollElement.css("position","relative"))),o=l.extend({link:null},o),a="left"==o.direction?"scrollLeft":a,o.scrollElement?(r=o.scrollElement,c=r[a]()):r=l("html, body").firstScrollable(),o.beforeScroll.call(r,o),n="number"==typeof t?t:e||l(o.scrollTarget)[i]()&&l(o.scrollTarget)[i]()[o.direction]||0,f[a]=n+c+o.offset,s=o.speed,"auto"===s&&(s=f[a]||r.scrollTop(),s/=o.autoCoefficent),h={duration:s,easing:o.easing,complete:function(){o.afterScroll.call(o.link,o)}},o.step&&(h.step=o.step),r.length?r.stop().animate(f,h):o.afterScroll.call(o.link,o)},l.smoothScroll.version=e,l.smoothScroll.filterPath=function(l){return l.replace(/^\//,"").replace(/(index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},l.fn.smoothScroll.defaults=o})(jQuery);