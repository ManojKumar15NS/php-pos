$(document).ready(function() {
    loadCategories();
    loadItems(); // Load all items initially

    function loadCategories() {
        $.ajax({
            url: "get_categories.php",
            type: "GET",
            success: function(data) {
                $("#categories").html(data);
            }
        });
    }

    function loadItems(category = "") {
        $.ajax({
            url: "get_items.php",
            type: "GET",
            data: { category: category },
            success: function(data) {
                $("#items").html(data);
            }
        });
    }

    $(document).on("click", ".category", function() {
        let category = $(this).text();
        loadItems(category);
    });

    let bill = [];

    $(document).on("click", ".item-card", function() {
        let name = $(this).data("name");
        let price = parseFloat($(this).data("price"));
        
        let item = bill.find(i => i.name === name);
        if (item) {
            item.qty++;
            item.total = item.qty * price;
        } else {
            bill.push({ name, price, qty: 1, total: price });
        }

        updateBill();
    });


    $("#checkoutBtn").off("click").on("click", function() {
        if (bill.length === 0) {
            alert("No items in the bill!");
            return;
        }
    
        let receipt = "==== Receipt ====\n";
        bill.forEach(item => {
            receipt += `${item.name} x ${item.qty} = ₹${item.total}\n`;
        });
    
        receipt += "-------------------\n";
        receipt += `Total: ₹${$("#totalAmount").text()}\n`;
        receipt += "Thank you for shopping!";
    
        let printWindow = window.open("", "", "width=400,height=600");
        printWindow.document.write("<pre>" + receipt + "</pre>");
        printWindow.document.close();
        printWindow.print();
    });
    

    function updateBill() {
        let total = 0;
        let billHTML = "";

        bill.forEach(item => {
            billHTML += `
                <tr>
                    <td>${item.name}</td>
                    <td>₹${item.price}</td>
                    <td>${item.qty}</td>
                    <td>₹${item.total}</td>
                </tr>
            `;
            total += item.total;
        });

        $("#bill-items").html(billHTML);
        $("#totalAmount").text(total);
    }
});

