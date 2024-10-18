## Flatlist element
Một số ghi chú dành cho `FlatList`:
|STT|Mô tả|
|:------:|:-----------:|
|1|`FlatList` dùng để chuyển đổi một mảng data thành một list element.
|2|Cần phải truyền vào prop `data` - là một mảng các data mà chúng ta sẽ dựa vào để tạo thành element.|
|3|Ngoài ra cần phải truyền vào prop `renderItem` một hàm dùng để chuyển đổi data thành element.|
|4|Không nên chuyển đổi một array data thành các element bằng kĩ thuật mapping của mảng, bởi vì `FlatList` được implement các logic tối ưu bên trong nó.|