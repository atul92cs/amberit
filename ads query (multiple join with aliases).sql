SELECT ads.Userid, ads.id,ads.Date,ads.Title,ads.Content,ads.Picture,categories.Name as Category ,subcategories.Name as Subcategory,users.Name as Username from ambelit.ads join ambelit.subcategories on ads.Subcategory=subcategories.id join ambelit.categories on ads.Category=categories.id join ambelit.users on ads.Userid=users.id;