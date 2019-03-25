import fetch from "../config/fetch";

export const shopList = (latitude, longitude, offset, restaurant_category_id = '', restaurant_category_ids = '', order_by = '', delivery_mode = '', support_ids = []) => {
    let supportStr = '';
    support_ids.forEach(item => {
        if (item.status) {
            supportStr += '&support_ids[]=' + item.id;
        }
    });
    let data = {
        latitude,
        longitude,
        offset,
        limit: '20',
        'extras[]': 'activities',
        keyword: '',
        restaurant_category_id,
        'restaurant_category_ids[]': restaurant_category_ids,
        order_by,
        'delivery_mode[]': delivery_mode + supportStr
    };
    return fetch('/shopping/restaurants', data);
};