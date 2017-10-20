angular.module("myApp").controller("friendCtrl", function( $scope ) {
    $scope.friends = [ 
        { 
            name: 'Alejandro Ratliff', 
            pic_square: 'https://randomuser.me/api/portraits/lego/3.jpg', 
            location: { 
                city: 'Pickens', 
                state: 'South Carolina', 
                country: 'United States' 
            }, 
            status: 'I currently have 4 windows open up… and I don’t know why.', 
            friend_count: 628 
        },
        { 
            name: 'Steven Shumate', 
            pic_square: 'https://randomuser.me/api/portraits/lego/4.jpg', 
            location: { 
                city: 'Duncanville', 
                state: 'Texas', 
                country: 'United States' 
            }, 
            status: 'We have never been to Asia, nor have we visited Africa. Cannnot wait to go!!!', 
            friend_count: 994 
        },
        { 
            name: 'Kris Diedrich', 
            pic_square: 'https://randomuser.me/api/portraits/lego/6.jpg', 
            location: { 
                city: 'Saint Louis', 
                state: 'Missouri', 
                country: 'United States' 
            }, 
            status: 'If you like tuna and tomato sauce- try combining the two. It’s really not as bad as it sounds.', 
            friend_count: 1268 
        },
        { 
            name: 'Stella Nauman', 
            pic_square: 'https://randomuser.me/api/portraits/lego/7.jpg', 
            location: null, 
            status: 'Joe made the sugar cookies; Susan decorated them. #PartyHard', 
            friend_count: 870 
        },
        { 
            name: 'Brett Jones', 
            pic_square: 'https://randomuser.me/api/portraits/lego/8.jpg', 
            location: { 
                city: 'Weehawken', 
                state: 'New Jersey', 
                country: 'United States' 
            }, 
            status: 'abstraction is often 1 floor above u', 
            friend_count: 249 
        },
        { 
            name: 'Toya Billings', 
            pic_square: 'https://randomuser.me/api/portraits/lego/5.jpg', 
            location: { 
                city: 'Garden City',
                state: 'New York', 
                country: 'United Kingdom' 
            },  
            status: 'when I was little I had a car door slammed shut on my hand & i still remember it quite vividly... lmao', 
            friend_count: 393 
        },
        { 
            name: 'William Severson', 
            pic_square: 'https://randomuser.me/api/portraits/lego/2.jpg', 
            location: { 
                city: 'Oklahoma City', 
                state: 'Oklahoma', 
                country: 'United States' 
            },  
            status: 'My Mum tries to be cool by saying that she likes all the same things that I do!!', 
            friend_count: 928 
        }];

        $scope.searchTerm = "";

        $scope.filters = {
            name: '',
            state: ''
        };

        $scope.sorts = {
            property: 'name',
            direction: '+'
        };
    }
);