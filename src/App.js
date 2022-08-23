import "./App.css";
import Map from "./Map";

function App() {
  return (
    <div id="contents">
      <div class="find_store_wrap">
        <form id="frmSearch" name="frmSearch" method="post">
          <div class="board_search_wrap mb30">
            <input type="hidden" name="sido" id="sido" value="" />
            <select style={{ width: "280px" }} id="etc9" name="etc9">
              <option value="">시/도</option>
              <option value="01">서울특별시</option>
              <option value="02">부산광역시</option>
              <option value="03">대구광역시</option>
              <option value="04">인천광역시</option>
              <option value="05">광주광역시</option>
              <option value="06">대전광역시</option>
            </select>
            <select style={{ width: "280px;" }} id="etc10" name="etc10">
              <option value="">구/군</option>
              <option value="대덕구">대덕구</option>
              <option value="동구">동구</option>
              <option value="서구">서구</option>
              <option value="유성구">유성구</option>
              <option value="중구">중구</option>
            </select>
            <div class="box" style={{ width: "560px" }}>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="매장명 또는 주소를 입력하세요."
                value=""
              />
              <input type="submit" value="검색" />
            </div>
          </div>
        </form>
        <div class="store_list_wrap">
          <div id="store_list" class="store_list mCustomScrollbar _mCS_1">
            <div
              id="mCSB_1"
              class="mCustomScrollBox mCS_light mCSB_vertical mCSB_inside"
              style={{ height: "620px" }}
              tabIndex="0"
            >
              <div
                id="mCSB_1"
                class="mCSB_container"
                style={{
                  position: "relative",
                  top: "0px",
                  left: "0px",
                }}
                dir="ltr"
              >
                <ul>
                  <li class>
                    <span class="store">둔산타임월드점</span>
                    <span class="address">대전광역시 서구 둔산동 986번지</span>
                  </li>
                  <li>
                    <span class="store">한남대점</span>
                    <span class="address">
                      대전광역시 대덕구 오정동 223-267
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
