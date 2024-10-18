## FlatList element
Một số ghi chú dành cho `FlatList`:
|STT|Mô tả|
|:------:|:-----------:|
|1|`FlatList` dùng để chuyển đổi một mảng data thành một list element.
|2|Cần phải truyền vào prop `data` - là một mảng các data mà chúng ta sẽ dựa vào để tạo thành element.|
|3|Ngoài ra cần phải truyền vào prop `renderItem` một hàm dùng để chuyển đổi data thành element.|
|4|Không nên chuyển đổi một array data thành các element bằng kĩ thuật mapping của mảng, bởi vì `FlatList` được implement các logic tối ưu bên trong nó.|
|5|Nên chỉ định prop `keyExtractor` cho `FlatList` bởi vì prop này giúp cho `FlatList` có thể ánh xạ phần tử hiện tại trong mảng với element. Nếu có thay đổi phần tử bên trong mảng, thì FlatList sẽ có thể cập nhật **tại vị trí phần tử thay đổi** thay vì **render lại toàn bộ**.| 

Ví dụ:

```tsx
const ListScreen : React.FC = () => {
    const friends : Friend[] = [
        {name: 'Friends #1'}, 
        {name: 'Friends #2'}, 
        {name: 'Friends #3'}, 
        {name: 'Friends #4'}, 
        {name: 'Friends #5'}, 
        {name: 'Friends #6'}, 
        {name: 'Friends #7'}
    ];

    return (
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false} 
            keyExtractor={(item: Friend) : string => item.name}
            data={friends} 
            renderItem={({ item }: ListRenderItemInfo<Friend>) => {
                return <Text style={styles.textStyle}>{item.name}</Text>;
            }}
        />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});
```