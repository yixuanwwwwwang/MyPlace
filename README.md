# CS 546 Final Project
## MyPlace, the information exchange platform



The routes will be running on http://localhost:3000

You can create apartments or second-hand furniture for sell. Or get information of the rentals and furniture sold by others.

# Run the Project
1. clone this respository using git. Install the packages.
```sh
$ npm install
```

2. Start the MongoDB, run the seed command.
```sh
$ npm run seeds
```

3. Run the project
```sh
$ npm start
```

## Features
User:
1. Sign up your account by clicking Sign Up. / Log in your Account by clicking Log In.
2. Click on Update Profile to update information of user.
3. Click on My Profile to view information of user.
4. Log out by clicking on "Logout".
5. profile 界面可以看 拥有的 item. 可以通过上面的name 或者 location 点进去那个特定的页面. 然后也可以看到当前那个家具或者rental likes数量和 comments数量. 如果这里没有拥有 furniture或者 rental的话, 可以直接通过那里的link 去创建一个 furniture
6. 用户的评论历史, 可以直接在profile界面删除. 
7. 用户可以更新自己的profile infromation
8. 特定密码如果输入和原来一样, 也会显示 和原来一样的 error 
9. password checking


Rental:
1. View all Rentals information by clicking "Check Out All Rentals".
2. Create a new rental
3. Enter all the information to create a new rental, and click Submit.
4. Search rentals by location; Filter unit types by selecting numbers of bedrooms and bathrooms in the sliders; Filter by maximum of price in the slider.
5. View the rental by clicking on it in the table.
6. View the details of the rental information including
 - location, description, unit type, utilities, price, labels, contact, images, and Google Map.
7. Back to the main page.

Furniture:
1. View all Furnitures information by clicking "Check Out All Furniture".
2. Create a new furniture
3. Enter all the information to create a new furniture, and click Submit.
4. Search rentals by name and categoty; Filter by maximum of price.
5. View the furniture by clicking on it in the table.
6. View the details of the furniture information including
 - price, category, description, location, purchase_link, contact, images, and Google Map.
7. Back to the main page.


Comments:
1. Click "Write a Review" on the detailed information page of rentals or furniture. 
2. Write your review and click on "Post Review".
3. You will see your review on the detailed information page of rentals or furniture.



## Group Members:
- Shaobo Li
- Jiaqing Wang
- Yixuan Wang
- Wei Yang



