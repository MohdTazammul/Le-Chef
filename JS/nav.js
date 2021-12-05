function navbar() {
    return ` <nav>
    <div class="brand" onclick="location.href='index.html'" >
      <img src="Icons/leChef.png" alt="Le Chef Logo" width="200px" height="60px">  
    </div>
    <div class="navigation">
          <div class="search">
        <div class="search-content">
          <button class="search-button" value="button" ><span class="iconify menu-icons" data-icon="fe:search"></span>&nbsp;&nbsp;Search</button>
          <input type="text" class="search-input" placeholder="Search here...">
        </div>
      </div>
      <ul class="menu">
      <li><span class="iconify menu-icons" data-icon="ic:baseline-restaurant-menu"></span><a href="index.html">Menu</a></li>
        <li><span class="iconify menu-icons" data-icon="icon-park-outline:chef-hat"></span><a href="#">Recipe of the Day</a></li>
        <li> <span class="iconify menu-icons" data-icon="bx:bx-food-menu"></span><a href="latest.html">Newest</a></li>
        <li style="border:1px solid black; padding: 3px 10px; border-radius: 10px; margin-top: -2px; " onclick="location.href='cart.html'"> <span class="iconify menu-icons" data-icon="clarity:shopping-cart-line"></span><label style="padding-left: 13px;" id="cartCount">0</label></li>
      </ul>  
    </div>
  </nav>`
}

export default navbar