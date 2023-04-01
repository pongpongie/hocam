 $(function(){
            getData();
        });
        function getData(){
            const url = 'https://jsonplaceholder.typicode.com/users';
            $.getJSON(url, {}, function(r){
                console.log(r);
                const $list = $(".list");
                for(let i = 0; i < r.length; i++){
                    const data = r[i];
                    const $item = createItem(data);
                    $list.append($item);
                }
                $("#user").show();
            });
        }

        function createItem(data){
            let $tmpl = $("#list-item-template").clone().removeAttr("id");
            $tmpl.find(".list-item-name").html(data.name);
            $tmpl.click(function(e){
                let url = 'testDetail.html?id=' + data.id;
                window.location = url;
            });
            return $tmpl;
        }