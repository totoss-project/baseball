const hairstyleSelect = document.getElementById('hairstyle-select');
const recommendBtn = document.getElementById('recommend-btn');
const productRecommendationDiv = document.getElementById('product-recommendation');

const products = {
    "slick-back": {
        name: "포마드 (Pomade)",
        description: "슬릭백 스타일은 머리카락을 뒤로 넘겨 고정해야 하므로, 강한 고정력과 광택을 제공하는 포마드 제품이 필수입니다. 수성 포마드는 사용 후 세척이 용이하며, 유성 포마드는 더 강력한 고정력과 광택을 제공합니다.",
        image: "https://i.namu.wiki/i/7CjY_3_3x_i4zO-u_a_fX2E_r2d2c_C_a_d_f_3E_a_d_B_A_a_B_c_C_e_B_9_d_4_E_A_9.webp"
    },
    "pomade": {
        name: "포마드 (Pomade) & 스프레이 (Spray)",
        description: "포마드 스타일은 깔끔하고 정돈된 느낌을 주는 것이 중요합니다. 포마드를 사용하여 머리카락을 빗어 넘기고, 헤어 스프레이로 마무리하여 스타일을 오랫동안 유지하는 것이 좋습니다.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_u2Vp_3_1_1_2_3_4_5_6_7_8_9_10_11_12_13_14&s"
    },
    "shadow-perm": {
        name: "컬 크림 (Curl Cream) & 에센스 (Essence)",
        description: "쉐도우펌은 자연스러운 컬과 볼륨감을 살리는 것이 중요합니다. 컬 크림을 사용하여 컬의 탄력을 유지하고, 헤어 에센스로 마무리하여 윤기 있고 건강한 머릿결을 연출할 수 있습니다.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_X_Y_Z_A_b_c_d_e_f_g_h_i_j_k_l_m_n_o_p_q_r_s&s"
    },
    "dandy-cut": {
        name: "왁스 (Wax) & 스프레이 (Spray)",
        description: "댄디컷은 깔끔하면서도 자연스러운 스타일링이 필요합니다. 소프트 왁스나 매트 왁스를 사용하여 원하는 모양을 잡고, 가벼운 타입의 헤어 스프레이로 고정하여 마무리합니다.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_a_b_c_d_e_f_g_h_i_j_k_l_m_n_o_p_q_r_s_t_u&s"
    }
};

function recommendProduct() {
    const selectedHairstyle = hairstyleSelect.value;
    if (!selectedHairstyle) {
        productRecommendationDiv.innerHTML = "<p>먼저 헤어스타일을 선택해주세요.</p>";
        return;
    }

    const recommendedProduct = products[selectedHairstyle];

    productRecommendationDiv.innerHTML = `
        <div class="product">
            <h2>${recommendedProduct.name}</h2>
            <p>${recommendedProduct.description}</p>
            <img src="${recommendedProduct.image}" alt="${recommendedProduct.name}" class="product-image">
        </div>
    `;
}

recommendBtn.addEventListener('click', recommendProduct);
