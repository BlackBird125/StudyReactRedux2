import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { decrementUserCount, fetchGetData, selectUser } from "./userSlice";

export function User() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const length = user.count;
  console.log(length);

  return (
    <div>
      <div>ゆーざーページ</div>
      <button onClick={() => dispatch(fetchGetData())}>
        ボタン（リダックスサンク-非同期）
      </button>
      <div>
        <span>でーたかうんと：</span>
        <span>{length}</span>
      </div>
      {user.userData.map((user) => (
        <div>
          <span>{user.name}</span>
          <span>::</span>
          <span>{user.email}</span>
        </div>
      ))}
      <button onClick={() => dispatch(decrementUserCount())}>
        カウント減らすボタン（通常アクション）
      </button>
    </div>
  );
}
