<div class="cubebox-tmpl-wrap">
   {{#if loading}}
   <div class="loading"></div>
   {{/if}}
   <div class="cont_ytc clearfix">
      <div class="l_ytc">
         <Carousel list="{{carouselList}}" slot="{{carouselTpl}}" width="120" height="155"></Carousel>
      </div>
      <div class="r_ytc">
         <ul class="text-list">
            {{#list textList as item by item_index}}
            <li class="item clearfix">
               <a href="{{item.type_url}}" target="_blank" class="type" title="{{item.type}}">
                  {{item.type}}
               </a>
               <em class="split"></em>
               <a href="{{item.url}}" target="_blank" class="title" title="{{item.title}}">
                  {{item.title}}
               </a>
            </li>
            {{/list}}
         </ul>

         <ul class="hot-topic clearfix">
            {{#list hotTopicList as item by item_index}}
            <li class="item">
               <a href="{{item.url}}" target="_blank">{{item.title}}</a>
            </li>
            {{/list}}
         </ul>
      </div>   
   </div>

   <div class="piclist_ytc">
      <ul class="clearfix">
         {{#list picList as item by item_index}}
         <li class="item">
            <a href="{{item.url}}" target="_blank">
               <span class="pic">
                  <img src="{{item.pic | clipImage:'120_72_75'}}" alt="{{item.title}}" width="120" height="72">
               </span>
               <span class="title">{{item.title}}</span>
               <span class="tag" c-hide="!item.keywords">{{item.keywords}}</span>
            </a>
         </li>
         {{/list}}
      </ul>
   </div>
</div>